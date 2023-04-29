export type Tickers = {
    [market_id: string]: Ticker;
};

export type Ticker = {
    amount: string;
    at: string;
    avg_price: string;
    high: string;
    last: string;
    low: string;
    open: string;
    price_change_percent: string; //"+0.00%" | "-1.00%",,
    volume: string;
};
