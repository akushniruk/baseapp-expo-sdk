import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { saveHistoryList, saveOpenOrders } from "../model/orderSlice";
import { IOpenOrderHistory, IOrderHistory, IOrderHistoryRequest } from "./types";

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
                    const response = await queryFulfilled;

                    if (response) {
                        dispatch(
                            dispatchAlert({
                                type: "success",
                                messageType: "success",
                                messageText: "Order created successfully",
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
        getUserOpenOrders: build.mutation<IOpenOrderHistory[], { market: string }>({
            query(data) {
                return {
                    url: `api/v2/finex/market/orders?state[]=wait&state[]=trigger_wait&market=${data.market}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(saveOpenOrders(response.data));
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
                const queryParams = `page=${data.page}&limit=${data.limit}&state[]=wait&state[]=trigger_wait&ord_type=limit&type=${data.type}&market=${data.market}&time_from=${data.time_from}&time_to=${data.time_to}`;

                return {
                    url: `api/v2/finex/market/orders?${queryParams}`,
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
