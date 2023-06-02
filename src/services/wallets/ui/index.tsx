import { useLinkTo } from "@react-navigation/native";
import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Pressable, VirtualizedList } from "react-native";
import { ArrowRightIcon } from "../../../assets/profile";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { walletsStyles } from "./wallets.style";
import { IWallet } from "../api/types";
import { useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";

interface IWallets {
    navigation?: any;
}

export const Wallets: FC<IWallets> = ({ navigation }: IWallets) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => walletsStyles(theme), [theme]);

    const wallets: IWallet[] | null = useAppSelector((state: RootState) => state.wallets.list);

    const renderWalletRow = useCallback((wallet: IWallet) => {
        return (
            <Pressable
                key={`${wallet.currency}`}
                // style={styles.row}
                onPress={() => handleUpdateCurrentMarket(wallet)}
            >
                <Text>{wallet.name}</Text>
            </Pressable>
        );
    }, []);

    const getItemCount = (_data: unknown) => wallets?.length;

    const getItem = (_data: unknown, index: number) => {
        return wallets[index];
    };

    const handleUpdateCurrentMarket = (wallet: IWallet) => {
        // TODO: setup navigation for deposit and withdrawal
        navigation?.navigate("Deposit", { id: wallet?.currency });
    };

    return (
        <View>
            <VirtualizedList
                initialNumToRender={14}
                renderItem={({ item }) => renderWalletRow(item)}
                keyExtractor={(item) => item.currency}
                getItemCount={getItemCount}
                getItem={getItem}
                maxToRenderPerBatch={14}
                // style={styles.bodyContainer}
            />
        </View>
    );
};
