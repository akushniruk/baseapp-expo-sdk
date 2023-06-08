export interface IWithdrawalHistory {
    id: number;
    currency: string;
    type: string;
    blockchain_key: string;
    amount: string;
    fee: string;
    blockchain_txid: string | null;
    rid: string;
    protocol: string;
    state: string;
    confirmations: number;
    note: string | null;
    transfer_type: string;
    created_at: string; // 2023-06-08T09:49:48Z
    updated_at: string; // 2023-06-08T09:49:48Z
    done_at: string | null;
}

export interface WithdrawalHistoryRequest {
    page: number;
    limit: number;
    currency?: string;
}
