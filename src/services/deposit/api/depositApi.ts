import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setDepositHistoryList, setTotal } from "../model/depositSlice";
import { IDepositHistory, DepositHistoryRequest } from "./types";

export const depositApi = api.injectEndpoints({
    endpoints: (build) => ({
        getDepositHistory: build.mutation<IDepositHistory[], DepositHistoryRequest>({
            query(data) {
                const currencyQuery = data.currency ? `&currency=${data.currency}` : "";
                return {
                    url: `api/v2/peatio/account/deposits?limit=${data.limit}&page=${data.page}${currencyQuery}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setDepositHistoryList(response.data));
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

export const { useGetDepositHistoryMutation } = depositApi;
