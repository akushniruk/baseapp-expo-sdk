import { IKline, IKlineResponse } from "../../api/types";

export const convertToIKline = (data: IKlineResponse[]): IKline[] => {
    return data.map((kline: IKlineResponse, index) => {
        // @ts-ignore
        const [time, open, high, low, close, volume] = kline;

        return {
            time: time * 1e3,
            open,
            high,
            low,
            close,
            volume
        };
    });
  };
  