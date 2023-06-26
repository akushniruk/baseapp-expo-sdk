export type Trade = {
    id: number;
    price: number;
    amount: number;
    total?: number;
    market: string;
    created_at: number;
    taker_type: string;
};

export type EventTrade = {
    tid: number;
    date: number;
    taker_type: string;
    price: number;
    amount: number;
};

export type ITradesHistory = {
    id: number;
    price: number;
    amount: number;
    total: number;
    market: string;
    created_at: number; // convert to date
    taker_type: "buy" | "sell";
};

export type ITradesHistoryRequest = {
    page: number;
    limit: number;
    type?: "buy" | "sell";
    market?: string;
    time_from?: number;
    time_to?: number;
};
