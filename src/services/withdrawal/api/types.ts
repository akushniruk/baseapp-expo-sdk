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

export interface IWithdrawal {
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

export interface WithdrawalRequest {
    amount: string;
    beneficiary_id: string;
    currency: string;
    otp: string;
}

export interface IBeneficiary {
    id: number;
    blockchain_key: string;
    protocol: string;
    blockchain_name: string;
    currency: string;
    uid: string;
    name: string;
    description: string | null;
    data: {
        address: string;
    };
    state: string;
    withdrawals: number;
    sent_at: string; // 2023-06-08T09:49:48Z
}
