import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { saveHistoryList } from "../model/orderSlice";
import { IOrderHistory, IOrderHistoryRequest } from "./types";

const queryBuild = <T extends Record<string, unknown>>(params: T): string => {
    const queryParameters = Object.entries(params)
        .filter(([_, value]) => value !== undefined) // Exclude undefined values
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join("&");

    return queryParameters;
};

export const orderApi = api.injectEndpoints({
    endpoints: (build) => ({
        createOrder: build.mutation<void, {}>({
            query(data) {
                return {
                    url: `api/v2/finex/market/orders`,
                    method: "POST",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageType: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
        cancelOrder: build.mutation<{}, { id: number }>({
            query(data) {
                return {
                    url: `api/v2/finex/market/orders/cancel/${data.id}`,
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;

                    if (response) {
                        dispatch(
                            dispatchAlert({
                                type: "success",
                                messageType: "success",
                                messageText: "Order canceled successfully",
                            })
                        );
                    }
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageType: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
        // TODO: check on the deployment
        cancelAllOrders: build.mutation<{}, { market: string }>({
            query(data) {
                return {
                    url: `api/v2/finex/market/orders/cancel/${data.market}`,
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;

                    if (response) {
                        dispatch(
                            dispatchAlert({
                                type: "success",
                                messageType: "success",
                                messageText: `All orders canceled successfully`,
                            })
                        );
                    }
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageType: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
        getUserOpenOrders: build.mutation<IOrderHistory[], { market: string }>({
            query(data) {
                return {
                    url: `api/v2/finex/market/orders?state[]=wait&state[]=trigger_wait`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(saveHistoryList(response.data));
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageType: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
        getUserOrdersHistory: build.mutation<IOrderHistory[], IOrderHistoryRequest>({
            query(data) {
                const queryParams = {
                    page: data.page,
                    limit: data.limit,
                    type: data.type,
                    ord_type: data.ord_type,
                    market: data.market,
                };

                const query =
                    data.historyType === "open"
                        ? `${queryBuild(queryParams)}&state=wait&state=trigger_wait`
                        : `${queryBuild(queryParams)}&state=${data.state}`;

                return {
                    url: `api/v2/finex/market/orders?${query}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(saveHistoryList(response.data));
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageType: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
    }),
});

export const {
    useGetUserOrdersHistoryMutation,
    useGetUserOpenOrdersMutation,
    useCreateOrderMutation,
    useCancelOrderMutation,
    useCancelAllOrdersMutation,
} = orderApi;
