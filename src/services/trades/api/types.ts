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
