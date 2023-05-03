import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { Market } from "../model/type";

type MarketsResponse = Market[];

// TODO: mb need remove
export const marketsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getMarkets: build.query<MarketsResponse, void>({
            query: () => ({ url: "api/v2/finex/public/markets" }),
            providesTags: (result = []) => [
                ...result.map(({ symbol }) => ({ type: "Markets", symbol } as const)),
                { type: "Markets" as const, symbol: "LIST" },
            ],
        }),
    }),
});

export const { useGetMarketsQuery } = marketsApi;

export const {
    endpoints: { getMarkets },
} = marketsApi;
