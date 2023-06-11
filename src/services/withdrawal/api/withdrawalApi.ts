import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setWithdrawalHistoryList, setTotal } from "../model/withdrawalSlice";
import { IWithdrawal, IWithdrawalHistory, WithdrawalHistoryRequest, WithdrawalRequest } from "./types";

export const withdrawalApi = api.injectEndpoints({
    endpoints: (build) => ({
        getWithdrawalHistory: build.mutation<IWithdrawalHistory[], WithdrawalHistoryRequest>({
            query(data) {
                const currencyQuery = data.currency ? `&currency=${data.currency}` : "";
                return {
                    url: `api/v2/peatio/account/withdraws?limit=${data.limit}&page=${data.page}${currencyQuery}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setWithdrawalHistoryList(response.data));
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
        createWithdrawal: build.mutation<IWithdrawal, WithdrawalRequest>({
            query(data) {
                return {
                    url: `api/v2/peatio/account/withdraws`,
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    dispatch(
                        dispatchAlert({
                            type: "success",
                            messageType: "success",
                            messageText: "Withdrawal request was received",
                        })
                    );
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

export const { useGetWithdrawalHistoryMutation } = withdrawalApi;
