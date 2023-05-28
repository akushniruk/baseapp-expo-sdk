export interface IAccountActivity {
    id: number;
    user_ip: string;
    user_ip_country: string;
    user_agent: "active" | "disabled";
    topic: string;
    action: string;
    result: string;
    data: any;
    created_at: string;
}

export interface AccountActivityRequest {
    page: number;
    limit: number;
}
