import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setTransferHistoryList, setTotal } from "../model/transferSlice";
import { ITransferHistory, TransferHistoryRequest } from "./types";

export const transferApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTransferHistory: build.mutation<ITransferHistory[], TransferHistoryRequest>({
            query(data) {
                const currencyQuery = data.currency ? `&currency=${data.currency}` : "";
                return {
                    url: `api/v2/peatio/account/internal_transfers?limit=${data.limit}&page=${data.page}${currencyQuery}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setTransferHistoryList(response.data));
                    // @ts-ignore
                    dispatch(setTotal(response?.meta?.response.headers.get("total")));
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

export const { useGetTransferHistoryMutation } = transferApi;


// create 
// {currency: "usdt", username_or_uid: "id4db001ed4f", amount: "2", otp: "513622"}
// response: {
//     "currency": "usdt",
//     "sender_username": "test",
//     "receiver_username": null,
//     "sender_uid": "IDDD8791DECB",
//     "receiver_uid": "ID4DB001ED4F",
//     "direction": "in",
//     "amount": "2.0",
//     "status": "completed",
//     "created_at": "2023-06-08T10:08:35Z",
//     "updated_at": "2023-06-08T10:08:35Z"
// }
// Request URL: https://aurora-master.uat.opendax.app/api/v2/peatio/account/internal_transfers
