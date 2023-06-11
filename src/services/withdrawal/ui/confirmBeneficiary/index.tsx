import React, { FC } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../../shared";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { IWallet } from "../../../wallets/api/types";

export const ConfirmBeneficiary: FC = () => {
    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);

    return (
        <View>
            <Text>Confirm for {wallet?.currency}</Text>
        </View>
    );
};
