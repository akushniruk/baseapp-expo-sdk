import { useLinkTo } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { useAppSelector, Button, useAppDispatch } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { RootState } from "../../../shared/providers/redux/model/store";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { IWallet } from "../../wallets/api/types";

export const Withdrawal: FC = () => {
    const dispatch = useAppDispatch();
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    // const styles = useMemo(() => beneficiariesStyles(theme), [theme]);

    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);

    const handleRedirect = () => {
        if (wallet?.type === "coin") {
            console.log("redirect");
            linkTo("/CreateCryptoBeneficiary");
        } else {
            dispatch(
                dispatchAlert({
                    type: "error",
                    messageType: "error",
                    messageText: "Fiat is not supported",
                })
            );
        }
    };
    return (
        <View>
            <Text>Sent {wallet?.currency}</Text>
            <Button onPress={handleRedirect} title="Select Beneficiary" isLoading={false} />
        </View>
    );
};
