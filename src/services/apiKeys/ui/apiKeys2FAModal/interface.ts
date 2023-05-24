export interface IApiKeys2FAModal {
    isLoading: boolean;
    buttonTitle: string;
    isOpen: boolean;
    snapPoints?: string[];
    setIsOpen: (isOpen: boolean) => void;
    sendRequest: () => void;
}
