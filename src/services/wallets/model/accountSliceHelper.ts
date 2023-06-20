import { IAccount, IAccountWS } from "../api/types";

export const updateAccounts = (list: IAccount[], updatedAccounts: IAccountWS) => {
    return list.map((account) => {
        let updatedWallet = account;
        const payloadCurrencies = Object.keys(updatedAccounts);

        if (payloadCurrencies.length) {
            payloadCurrencies.some((value) => {
                const targetWallet = updatedAccounts[value];

                if (value === account.currency && targetWallet && targetWallet[2] === account.account_type) {
                    updatedWallet = {
                        ...updatedWallet,
                        balance: targetWallet[0] ?? updatedWallet.balance,
                        locked: targetWallet[1] ?? updatedWallet.locked,
                    };

                    return true;
                }

                return false;
            });
        }

        return updatedWallet;
    });
};
