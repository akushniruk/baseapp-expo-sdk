export type Market = {
    symbol: string;
    name: string;
    type: string;
    base_unit: string;
    quote_unit: string; 
    min_price: number;
    max_price: number;
    min_amount: number;
    amount_precision: number;
    price_precision: number;
    state: boolean;
}
