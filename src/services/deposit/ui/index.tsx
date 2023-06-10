import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import { depositStyles } from "./deposit.styles";
import { useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { RootState } from "../../../shared/providers/redux/model/store";
import { IWallet, IWalletAddress } from "../../wallets/api/types";
import { Currency } from "../../currencies/model/type";
import { Network } from "../../networks/model/type";
import QRCode from "react-native-qrcode-svg";
import { User } from "../../user";

// TODO: add support for memo and destination tag
export const Deposit: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => depositStyles(theme), [theme]);

    const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
    const [depositAddress, setDepositAddress] = useState<IWalletAddress | null>(null);

    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);
    const currencies: Currency[] | null = useAppSelector((state: RootState) => state.currency.list);
    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);

    const currency: Currency | null = useMemo(
        () => currencies?.find((item) => item.id === wallet?.currency) || null,
        [currencies, wallet]
    );

    useEffect(() => {
        if (currency?.networks) {
            setSelectedNetwork(currency.networks[0]);
        }
    }, [currency]);

    useEffect(() => {
        if (wallet?.deposit_addresses && selectedNetwork) {
            const depositAddress = wallet.deposit_addresses?.find(
                (address) => address.blockchain_key?.toLowerCase() === selectedNetwork.blockchain_key?.toLowerCase()
            );
            setDepositAddress(depositAddress || null);
        }
    }, [wallet, selectedNetwork]);

    const renderAvailableNetworks = (network: Network) => {
        if (network?.status === "hidden" && profile?.role !== "admin" && profile?.role !== "superadmin") {
            return null;
        }

        return (
            <Pressable onPress={() => setSelectedNetwork(network)}>
                <Text>{network?.protocol?.toUpperCase()}</Text>
            </Pressable>
        );
    };

    const renderNetworkSuspended = () => {
        return (
            <View>
                <Text>Deposits of {wallet?.currency} on that network is temporary suspended</Text>
            </View>
        );
    };

    const renderDepositInfo = () => {
        return (
            <View>
                <QRCode value={depositAddress?.address} />
                <View>
                    <Text>{wallet?.currency.toUpperCase()} Deposit Address</Text>
                    <Text>{depositAddress?.address}</Text>
                </View>
                <View>
                    <Text>Network</Text>
                    <Text>{selectedNetwork?.protocol}</Text>
                </View>
                <View>
                    <Text>Minimum deposit</Text>
                    <Text>
                        {selectedNetwork?.min_deposit_amount} {wallet?.currency.toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View>
            <Text>Deposit {wallet?.currency.toUpperCase()}</Text>
            {currency?.networks?.map(renderAvailableNetworks)}
            {selectedNetwork?.status === "disabled" ? renderNetworkSuspended() : renderDepositInfo()}
        </View>
    );
};
