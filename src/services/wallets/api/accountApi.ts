import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setAccounts } from "../model/accountsSlice";
import { IAccount } from "./types";

// TODO: add type for error
export const walletsApi = api.injectEndpoints({
    endpoints: (build) => ({
        // GET: user balances
            getAccounts: build.query<IAccount[], void>({
                query: () => ({
                    url: "/api/v2/peatio/account/balances",
                }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    const accounts = response.data;

                    dispatch(setAccounts(accounts));
                } catch (error: any) {
                    console.log(error)
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

export const { useGetAccountsQuery } =
    walletsApi;
