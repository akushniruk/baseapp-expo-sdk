import { IAccountWS, IWallet, IWalletAddress } from "../api/types";

export const updateWallet = (wallet: IWallet, payload: IWalletAddress) => {
    let depositAddresses: IWalletAddress[] = [];
    let depositAddress: IWalletAddress | null = null;

    const walletDepositAddressExist = wallet?.deposit_addresses?.some(
        (item: IWalletAddress) => item.blockchain_key === payload.blockchain_key
    );

    if (payload.blockchain_key && !walletDepositAddressExist) {
        const newDepositAddress = {
            address: payload.address,
            currencies: payload.currencies,
            blockchain_key: payload.blockchain_key,
        };

        depositAddresses = [...(wallet.deposit_addresses || []), newDepositAddress];
    } else if (wallet.deposit_addresses?.length && walletDepositAddressExist) {
        depositAddresses = wallet.deposit_addresses.map((address) => {
            if (address.blockchain_key === payload.blockchain_key) {
                depositAddress = {
                    address: payload.address,
                    currencies: payload.currencies,
                    blockchain_key: payload.blockchain_key,
                };

                if (payload.state) {
                    depositAddress = {
                        ...depositAddress,
                        state: payload.state,
                    };
                }

                return depositAddress;
            }

            return address;
        });
    } else {
        depositAddresses = [
            {
                address: payload.address,
                currencies: payload.currencies,
                blockchain_key: payload.blockchain_key,
            },
        ];
    }

    return {
        ...wallet,
        deposit_addresses: depositAddresses,
    };
};

export const updateWalletBalanceWS = (wallet: IWallet, updatedAccounts: IAccountWS) => {
    let newWallet: IWallet | null = null;
    const payloadCurrencies = Object.keys(updatedAccounts);

    if (payloadCurrencies.length) {
        payloadCurrencies.some((value) => {
            const targetWallet = updatedAccounts[value];

            if (value === wallet.currency && targetWallet && targetWallet[2] === wallet.account_type) {
                newWallet = {
                    ...wallet,
                    balance: targetWallet[0] ?? wallet.balance,
                    locked: targetWallet[1] ?? wallet.locked,
                };

                return true;
            }

            return false;
        });
    }

    console.log("new", newWallet);
    return newWallet;
};
