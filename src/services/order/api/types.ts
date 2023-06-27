export type IOrderStatus = "wait" | "done" | "cancel" | "pending" | "reject" | "trigger_wait";
export type IOrderSide = "buy" | "sell";
export type IOrderType = "limit" | "market" | "stop_loss" | "stop_limit" | "take_profit" | "take_limit";

export type IOrderHistory = {
    id: number;
    uuid: string;
    uid: string;
    side: IOrderSide;
    ord_type: IOrderType;
    market: string;
    origin_volume: string;
    remaining_volume: string;
    executed_volume: string;
    price: string;
    avg_price: string;
    trigger_price: string;
    state: string;
    trades_count: number;
    maker_fee: string;
    taker_fee: string;
    created_at: number;
};

export type IOrderHistoryRequest = {
    page: number;
    limit: number;
    historyType: "open" | "all";
    type?: IOrderSide;
    ord_type?: IOrderType;
    market?: string;
    state?: string;
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
