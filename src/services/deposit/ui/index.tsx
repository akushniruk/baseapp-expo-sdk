import React, { FC, useEffect, useMemo, useState, useCallback, useRef } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { depositStyles } from "./deposit.styles";
import { useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { RootState } from "../../../shared/providers/redux/model/store";
import { IWallet, IWalletAddress } from "../../wallets/api/types";
import { Currency } from "../../currencies/model/type";
import { Network } from "../../networks/model/type";
import QRCode from "react-native-qrcode-svg";
import { User } from "../../user";
import { Modal } from "../../../shared/ui/modal";
import BottomSheet from "@gorhom/bottom-sheet";
import { SelectIcon } from "../../../assets/system/selector";
import { Copy } from "../../../assets/system/copy";
import * as Clipboard from "expo-clipboard";

// TODO: add support for memo and destination tag
export const Deposit: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => depositStyles(theme), [theme]);

    const [isNetworksOpen, setIsNetworksOpen] = useState<boolean>(false);
    const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
    const [depositAddress, setDepositAddress] = useState<IWalletAddress | null>(null);

    const bottomSheetRef = useRef<BottomSheet>(null);

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

    const handleSetSelectedNetwork = (network: Network) => {
        setSelectedNetwork(network);
        bottomSheetRef?.current?.forceClose();
        setIsNetworksOpen(false);
    };

    const handlePress = useCallback(async () => {
        await Clipboard.setStringAsync(depositAddress?.address || "");
    }, [depositAddress]);

    const renderAvailableNetworks = (network: Network) => {
        if (network?.status === "hidden" && profile?.role !== "admin" && profile?.role !== "superadmin") {
            return null;
        }

        return (
            <Pressable
                style={({ pressed }) => [
                    styles.network,
                    {
                        backgroundColor: pressed
                            ? styles.networkPressed.backgroundColor
                            : styles.network.backgroundColor,
                    },
                ]}
                onPress={() => handleSetSelectedNetwork(network)}
            >
                <Text style={styles.networkText}>{network?.protocol?.toUpperCase()}</Text>
            </Pressable>
        );
    };

    const renderNetworkSuspended = () => {
        return (
            <View>
                <Text>Deposits of {wallet?.currency} on that network is temporary suspended</Text>
                {renderNetworkSelector()}
            </View>
        );
    };

    const renderDepositInfo = () => {
        return (
            <View style={styles.depositInfoContainer}>
                <View style={styles.QRCode}>
                    <QRCode size={200} value={depositAddress?.address} />
                    <View style={styles.QRCodeTextContainer}>
                        <Text style={styles.QRCodeText}>
                            Send only {wallet?.currency?.toUpperCase()} to this deposit address.
                        </Text>
                        <Text style={styles.QRCodeText}>
                            Sending coin or token other than {wallet?.currency?.toUpperCase()} to this address may
                            result in the loss of your deposit.
                        </Text>
                    </View>
                </View>
                <Pressable onPress={handlePress} style={styles.depositAddressContainer}>
                    <View>
                        <Text style={styles.depositAddressLabel}>{wallet?.currency.toUpperCase()} Deposit Address</Text>
                        <Text style={styles.depositAddress}>{depositAddress?.address}</Text>
                    </View>
                    <Copy width={12} color={styles.copyColor.color} />
                </Pressable>
                {renderNetworkSelector()}
                <View style={styles.minimumDepositContainer}>
                    <Text style={styles.minimumDepositLabel}>Minimum deposit</Text>
                    <Text style={styles.minimumDeposit}>
                        {selectedNetwork?.min_deposit_amount} {wallet?.currency.toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    };

    const renderNetworkSelector = () => {
        return (
            <>
                <Text style={styles.networkLabel}>Network</Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.networkSelector,
                        {
                            backgroundColor: pressed
                                ? styles.networkSelectorPressed.backgroundColor
                                : styles.networkSelector.backgroundColor,
                        },
                    ]}
                    onPress={() => setIsNetworksOpen(true)}
                >
                    <Text style={styles.networkSelectorText}>
                        {selectedNetwork?.protocol ? selectedNetwork?.protocol : "Select network"}
                    </Text>
                    <SelectIcon width={18} />
                </Pressable>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.depositContainer}>
                {selectedNetwork?.status === "disabled" ? renderNetworkSuspended() : renderDepositInfo()}
            </ScrollView>
            <Modal
                snapPoints={["60%", "80%"]}
                bottomSheetRef={bottomSheetRef}
                isOpen={isNetworksOpen}
                setIsOpen={setIsNetworksOpen}
            >
                <View style={styles.networksContainer}>{currency?.networks?.map(renderAvailableNetworks)}</View>
            </Modal>
        </View>
    );
};
