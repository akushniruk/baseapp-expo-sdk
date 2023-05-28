export interface ApiKeysTableProps {
    createRequest: () => void;
    deleteRequest: (kid: string) => void;
    updateRequest: (kid: string, state: "active" | "disabled") => void;
}
