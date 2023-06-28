import { IAccount } from "../../../wallets/api/types";

export const getAccount = (currency: string, accounts: IAccount[]) => {
    return accounts.find((account: IAccount) => account.currency === currency.toLowerCase()) as IAccount;
};
