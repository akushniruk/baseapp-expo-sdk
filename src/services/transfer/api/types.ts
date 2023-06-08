export interface ITransferHistory {
    currency: string;
    sender_username: string | null;
    receiver_username: string | null;
    sender_uid: string | null;
    receiver_uid: string | null;
    direction: string; // in or out
    amount: string;
    status: string;
    created_at: string; // 2023-06-08T10:08:35Z
    updated_at: string; // 2023-06-08T10:08:35Z
}

export interface TransferHistoryRequest {
    page: number;
    limit: number;
    currency?: string;
}
