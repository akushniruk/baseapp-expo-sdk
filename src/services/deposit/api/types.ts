export interface IDepositHistory {
    id: number;
    currency: string;
    blockchain_key: string;
    protocol: string;
    warning: string;
    amount: string;
    fee: string;
    txid: string;
    confirmations: string;
    state: string;
    transfer_type: string;
    created_at: string; // 2023-04-19T11:44:32Z
    completed_at: string; // 2023-04-19T11:44:32Z
    tid: string;
}

export interface DepositHistoryRequest {
    page: number;
    limit: number;
    currency?: string;
}
