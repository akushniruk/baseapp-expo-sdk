export type IOrderStatus = "wait" | "done" | "cancel" | "pending" | "reject" | "trigger_wait";
export type IOrderSide = "buy" | "sell";
export type IOrderType = "limit" | "market" | "stop_loss" | "stop_limit" | "take_profit" | "take_limit";

export type IOpenOrderHistory = {
    id: number;
    side: IOrderSide;
    ord_type: IOrderType;
    price: number;
    avg_price: number;
    state: IOrderStatus;
    market: string;
    created_at: string; // 2018-11-29T16:54:46+01:00,
    triggered_at: string; // 2018-11-29T16:54:46+01:00,
    origin_volume: string;
    remaining_volume: string;
    executed_volume: string;
    trigger_price: string;
    trades_count: string;
};

export type IOrderHistory = {
    id: number;
    price: number;
    amount: number;
    total: number;
    market: string;
    created_at: number; // convert to date
    taker_type: IOrderSide;
};

export type IOrderHistoryRequest = {
    page: number;
    limit: number;
    type?: IOrderSide;
    market?: string;
    time_from?: number;
    time_to?: number;
};

// Use ZOD;
// {
//     "market": "eurusd",
//     "side": "buy",
//     "amount": "1",
//     "price": "1",
//     "type": "limit"
// }

// advanced
// {
//     "market": "eurusd",
//     "side": "buy",
//     "amount": "12",
//     "trigger_price": "12",
//     "type": "take_profit"
// }
