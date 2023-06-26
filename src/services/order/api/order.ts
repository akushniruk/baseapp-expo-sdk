import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { saveHistoryList } from "../model/orderSlice";
import { IOrderHistory, IOrderHistoryRequest } from "./types";
// import { dispatchAlert } from "../../../shared/ui/alerts";

export const orderApi = api.injectEndpoints({
    endpoints: (build) => ({
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
                    // TODO: handle errors;
                    // dispatch(
                    //     dispatchAlert({
                    //         type: "error",
                    //         messageType: "error",
                    //         messageText: error.error.data.errors[0],
                    //     })
                    // );
                }
            },
        }),
    }),
});

export const { useGetUserOrdersHistoryMutation } = orderApi;
