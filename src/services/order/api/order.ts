import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { saveHistoryList, saveOpenOrders } from "../model/orderSlice";
import { IOrderCreateRequest, IOrderHistory, IOrderHistoryRequest } from "./types";
import { queryBuild } from "../../../shared/libs/queryBuild";

export const orderApi = api.injectEndpoints({
    endpoints: (build) => ({
        createOrder: build.mutation<void, IOrderCreateRequest>({
            query(data) {
                return {
                    url: `api/v2/finex/market/orders`,
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
                                messageText: "Order created",
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

                let stateParam: string;
                if (data.historyType === "open") {
                    stateParam = "&state=wait&state=trigger_wait";
                } else {
                    stateParam = data.state ? `&state=${data.state}` : "";
                }

                const query = `${queryBuild(queryParams)}${stateParam}`;

                return {
                    url: `api/v2/finex/market/orders?${query}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;

                    if (args.historyType === "open") {
                        dispatch(saveOpenOrders(response.data));
                    } else {
                        dispatch(saveHistoryList(response.data));
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
    }),
});

export const {
    useGetUserOrdersHistoryMutation,
    useGetUserOpenOrdersMutation,
    useCreateOrderMutation,
    useCancelOrderMutation,
    useCancelAllOrdersMutation,
} = orderApi;
