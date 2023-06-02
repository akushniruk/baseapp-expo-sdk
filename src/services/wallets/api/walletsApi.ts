import { useAppSelector } from "../../../shared";
import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { RootState } from "../../../shared/providers/redux/model/store";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { Currency } from "../../currencies/model/type";
import { User } from "../../user/api/types";
import { setWallets } from "../model/walletsSlice";
import { IAccount, IWallet } from "./types";

// TODO: add type for error
export const walletsApi = api.injectEndpoints({
    endpoints: (build) => ({
        // GET: user balances
            getAccounts: build.query<IAccount[], void>({
                query: () => ({
                    url: "/api/v2/peatio/account/members/me",
                }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    const accounts = response.data;
                    const currencies = useAppSelector((state: RootState) => state.currency.list);
                    const userProfile: User | null = useAppSelector((state: RootState) => state.user.profile);
                        
                    const accountsByCurrencies = currencies?.map((currency: Currency) => {
                        let accountByCurrency = accounts?.find((account: IAccount) => account.currency === currency.id);
            
                        if (currency.status === 'hidden' && (userProfile?.role === 'admin' || userProfile?.role === 'superadmin')) {
                            return null;
                        }
            
                        if (!accountByCurrency) {
                            accountByCurrency = {
                                account_type: '',
                                currency: currency.id,
                            };
                        }
            
                        return {
                            ...accountByCurrency,
                            name: currency?.name,
                            networks: currency?.networks,
                            type: currency?.type,
                            fixed: currency?.precision,
                            iconUrl: currency?.icon_url,
                        };
                    });
            
                    // FIXME: types
                    const wallets: IWallet | any = accountsByCurrencies.filter((item) => item && item.currency);
                    dispatch(setWallets(wallets));
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

export const { useGetAccountsQuery } =
    walletsApi;
