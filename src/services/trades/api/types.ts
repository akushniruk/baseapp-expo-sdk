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
    price: string;
    amount: string;
    total: string;
    fee_currency: string;
    fee: string;
    fee_amount: string;
    market: string;
    market_type: string;
    created_at: string;
    taker_type: string;
    side: string;
    orderId: number;
};

export type ITradesHistoryRequest = {
    page: number;
    limit: number;
    type?: "buy" | "sell";
    market?: string;
    time_from?: number;
    time_to?: number;
};
