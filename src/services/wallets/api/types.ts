export interface IWallet {
    currency: string;
    name: string;
    type: 'fiat' | 'coin';
    fixed: number;
    account_type: string;
    balance?: string;
    locked?: string;
    iconUrl?: string;
    active?: boolean;
    deposit_addresses?: IWalletAddress[];
    networks: IWalletNetwork[];
}

export interface IWalletNetwork {
    blockchain_key: string;
    protocol: string;
    explorer_transaction?: string;
    explorer_address?: string;
    min_confirmations?: string;
    withdraw_fee: number;
}

export interface IWalletAddress {
    address: string;
    currencies: string[];
    state?: string;
    blockchain_key: string;
}

export interface IWalletWithdrawCCY {
    amount: string;
    currency: string;
    otp: string;
    beneficiary_id: string;
}

export interface IWalletWithdrawFiat {
    amount: string;
    currency: string;
    currency_type: string;
    otp: string;
    beneficiary_id: string;
}

export interface IAccount {
    currency: string;
    account_type: string;
    balance?: string;
    locked?: string;
    deposit_address?: IWalletAddress;
}
