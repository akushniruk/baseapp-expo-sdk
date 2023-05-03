import { EventTrade, Trade } from "../api/types";

export const convertTradeEvent = (market: string, trade: EventTrade): Trade => ({
    market,
    id: trade.tid,
    created_at: trade.date,
    taker_type: trade.taker_type,
    price: trade.price,
    amount: trade.amount,
});

export const convertTradeEventList = (market: string, trades: EventTrade[]): Trade[] =>
    trades.map((trade) => convertTradeEvent(market, trade));
