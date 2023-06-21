import React, { FC, useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { Button, OTPInput, useAppSelector } from "../../../../shared";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useActivateBeneficiaryMutation, useGetBeneficiariesMutation } from "../../api/beneficiaryApi";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { confirmBeneficiaryStyles } from "./confirmBeneficiary.styles";
import { IBeneficiary } from "../../api/types";
import { IWallet } from "../../..//wallets/api/types";

interface IConfirmBeneficiaryProps {
    navigation?: any;
}

export const ConfirmBeneficiary: FC<IConfirmBeneficiaryProps> = ({ navigation }: IConfirmBeneficiaryProps) => {
    const [activateBeneficiary, { isLoading, isSuccess }] = useActivateBeneficiaryMutation();
    const [getBeneficiaries] = useGetBeneficiariesMutation();

    const { theme } = useThemeContext();
    const styles = useMemo(() => confirmBeneficiaryStyles(theme), [theme]);

    const [pin, setPin] = useState<string>("");

    const beneficiary: IBeneficiary | null = useAppSelector((state: RootState) => state.beneficiary.beneficiary);
    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);

    useEffect(() => {
        if (isSuccess && navigation && wallet) {
            getBeneficiaries({ currency: wallet.currency });
            navigation.navigate("Beneficiaries");
        }
    }, [isSuccess, navigation, wallet]);

    if (!beneficiary) {
        return <Text>Beneficiary is missing</Text>;
    }

    return (
        <View style={styles.modalContainer}>
            <Text style={styles.info}>
                We have sent you an email containing a confirmation code pin, please enter it below to save the new
                address.
            </Text>
            <View>
                <Text style={styles.label}>Email verification code</Text>
                <OTPInput code={pin} setCode={setPin} maximumLength={6} emptyInputSymbol="*" />

                <Button
                    onPress={() => activateBeneficiary({ id: beneficiary.id, pin })}
                    title="Activate"
                    isLoading={isLoading}
                    disabled={!pin}
                />
            </View>
        </View>
    );
};
