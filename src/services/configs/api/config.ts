import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { saveCurrencies } from "../../currencies/model/currenciesSlice";
import { saveMarkets } from "../../markets/model/marketsSlice";
// import { dispatchAlert } from "../../../shared/ui/alerts";

export const configApi = api.injectEndpoints({
    endpoints: (build) => ({
        config: build.query<any, void>({
            query: () => ({
                url: "/api/v2/peatio/public/config",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { markets, currencies } = (await queryFulfilled).data;
                    dispatch(saveMarkets(markets));
                    dispatch(saveCurrencies(currencies));
                } catch (error) {
                    // TODO: handle errors;
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useConfigQuery } = configApi;
