export interface ApiKey {
    kid: string;
    algorithm: string;
    scope?: typeof Array;
    state: string;
    secret?: string;
    created_at: string;
    updated_at: string;
}

export interface ApiKeyListRequest {
    page: number;
    limit: number;
}

export interface ApiKeyCreateRequest {
    totp_code: string;
    algorithm: string;
}

export interface ApiKeyUpdateRequest {
    kid: string;
    totp_code: string;
    state: "disabled" | "active";
}
