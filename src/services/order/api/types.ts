export type IOrderHistory = {
    id: number;
    price: number;
    amount: number;
    total: number;
    market: string;
    created_at: number; // convert to date
    taker_type: "buy" | "sell";
};

export type IOrderHistoryRequest = {
    page: number;
    limit: number;
    type?: "buy" | "sell";
    market?: string;
    time_from?: number;
    time_to?: number;
};
