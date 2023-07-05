import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { convertToIKline } from "../libs/helpers/convertKline";
import { setKlineList } from "../model/klineSlice";
import { IKlineRequest, IKlineResponse } from "./types";

export const klineApi = api.injectEndpoints({
    endpoints: (build) => ({
        getKlineHistory: build.mutation<IKlineResponse[], IKlineRequest>({
            query(data) {
                return {
                    // TODO: should be finex
                    // url: `api/v2/peatio/public/markets/${data.marketId}/k-line?period=${data.period}&time_from=${data.time_from}&time_to=${data.time_to}`,
                    url: `api/v2/finex/public/markets/btcusdt/k-line?period=15&time_from=1687673700&time_to=1688573700`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    const klineList = convertToIKline(response.data);
                    dispatch(setKlineList(klineList));
                    // @ts-ignore
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

export const { useGetKlineHistoryMutation } = klineApi;
