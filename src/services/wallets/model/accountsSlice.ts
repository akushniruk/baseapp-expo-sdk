import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount, IWalletAddress } from "../api/types";

export interface IAccountState {
    list: IAccount[];
}

export const AccountState: IAccountState = {
    list: [],
};

const getUpdatedWalletsList = (list: IAccount[], payload: IWalletAddress) => {
    if (list.length && payload.currencies?.length) {
        return list.map((wallet: IAccount) => {
            if (payload.currencies.includes(wallet.currency)) {
                let depositAddresses: IWalletAddress[] = [];
                let depositAddress: IWalletAddress | null = null;
                const walletDepositAddressExist =
                    wallet?.deposit_addresses?.findIndex(
                        (item: IWalletAddress) => item.blockchain_key === payload.blockchain_key
                    ) !== -1;

                if (payload.blockchain_key && !walletDepositAddressExist) {
                    const newDepositAddress = [
                        {
                            address: payload.address,
                            currencies: payload.currencies,
                            blockchain_key: payload.blockchain_key,
                        },
                    ];

                    const oldDepositAddresses = wallet.deposit_addresses || [];

                    depositAddresses = [...oldDepositAddresses, ...newDepositAddress];
                } else if (wallet.deposit_addresses && wallet.deposit_addresses.length && walletDepositAddressExist) {
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
            }

            return wallet;
        });
    }

    return list;
};

export const accounts = createSlice({
    name: "account",
    initialState: AccountState,
    reducers: {
        setAccounts(state, action: PayloadAction<IAccount[]>) {
            state.list = action.payload;
        },
        setWalletAddress(state, action: PayloadAction<IWalletAddress>) {
            state.list = getUpdatedWalletsList(state.list, action.payload);
        },
    },
});

export const { setAccounts, setWalletAddress } = accounts.actions;
