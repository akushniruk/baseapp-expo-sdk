import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { saveHistoryList, saveTrades } from "../model/tradesSlice";
import { Trade, ITradesHistory, ITradesHistoryRequest } from "./types";
import { queryBuild } from "../../../shared/libs/queryBuild";
// import { dispatchAlert } from "../../../shared/ui/alerts";

export const tradesApi = api.injectEndpoints({
    endpoints: (build) => ({
        trades: build.mutation<Trade[], { marketId: string }>({
            query(data) {
                return {
                    url: `api/v2/peatio/public/markets/${data.marketId}/trades`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(saveTrades(response.data));
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
        getUserTradesHistory: build.mutation<ITradesHistory[], ITradesHistoryRequest>({
            query(data) {
                return {
                    url: `api/v2/peatio/market/trades?${queryBuild(data)}`,
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

export const { useTradesMutation, useGetUserTradesHistoryMutation } = tradesApi;
