import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setAccounts, setWalletAddress } from "../model/accountsSlice";
import { IAccount, IWalletAddress } from "./types";

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
                    console.log(error);
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
        createWalletAddress: build.mutation<IWalletAddress, { currency: string; blockchain_key: string }>({
            query(data) {
                return {
                    url: `api/v2/peatio/account/deposit_address/${data.currency}?blockchain_key=${data.blockchain_key}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    const { address, currencies, state, blockchain_key } = response.data;

                    dispatch(setWalletAddress({ address, currencies, state, blockchain_key }));
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

export const { useGetAccountsQuery, useCreateWalletAddressMutation } = walletsApi;
