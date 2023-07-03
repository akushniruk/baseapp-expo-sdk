// [[], [], []] => [{time, open, high, low, close, volume}, ...]

export interface IKline {
    time: number,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
}

export interface IKlineRequest {
    period: number;
    time_from: number;
    time_to: number;
    marketId: string;
}

export interface IKlineResponse {
    data: Array<[number, number, number, number, number, number]>;
}
