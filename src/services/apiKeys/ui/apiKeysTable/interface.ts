export interface ApiKeysTableProps {
    createRequest: (isOpen: boolean) => void;
    deleteRequest: (kid: string, isOpen: boolean) => void;
    updateRequest: (kid: string, state: string, isOpen: boolean) => void;
}
