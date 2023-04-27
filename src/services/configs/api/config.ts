import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { saveMarkets } from "../../markets/model/marketsSlice";
// import { dispatchAlert } from "../../../shared/ui/alerts";

export const apiKeysApi = api.injectEndpoints({
    endpoints: (build) => ({
        config: build.query<any, void>({
            query: () => ({
                url: "/api/v2/peatio/public/config",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { markets } = (await queryFulfilled).data;
                    console.log(markets);
                    dispatch(saveMarkets(markets));
                } catch (error) {
                    // TODO: handle errors;
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useConfigQuery } = apiKeysApi;
