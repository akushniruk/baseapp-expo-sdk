import React, { FC, useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { Button, OTPInput } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { receiptStyles } from "./receipt.styles";
import { beneficiary } from "../../model/beneficiarySlice";
import { useCreateWithdrawalMutation } from "../../api/withdrawalApi";
import { useLinkTo } from "@react-navigation/native";

interface IReceiptProps {
    currency: string;
    address: string;
    network: string;
    beneficiaryName: string;
    beneficiaryId: string;
    amount: string;
    fee: number;
}

export const Receipt: FC<IReceiptProps> = ({
    address,
    currency,
    network,
    beneficiaryName,
    beneficiaryId,
    amount,
    fee,
}: IReceiptProps) => {
    const [createWithdrawl, { isLoading, isSuccess }] = useCreateWithdrawalMutation();

    const linkTo = useLinkTo();
    const { theme } = useThemeContext();
    const styles = useMemo(() => receiptStyles(theme), [theme]);

    const [otp, setOtp] = useState<string>("");

    useEffect(() => {
        if (isSuccess) {
            linkTo("/WalletDetails");
        }
    }, [isSuccess]);

    const createWithdrawalHandler = () => {
        createWithdrawl({
            beneficiary_id: beneficiaryId,
            amount: amount,
            currency: currency,
            otp: otp,
        });
        setOtp("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Withdraw {currency?.toUpperCase()}</Text>
            <View style={styles.textBlock}>
                <Text style={styles.textBlockTitle}>Withdraw to</Text>
                <Text style={styles.textBlockSubTitle}>{address}</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={styles.textBlockTitle}>Network</Text>
                <Text style={styles.textBlockSubTitle}>{network?.toUpperCase()}</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={styles.textBlockTitle}>Name</Text>
                <Text style={styles.textBlockSubTitle}>{beneficiaryName}</Text>
            </View>
            <View style={styles.textBlock}>
                <View style={styles.secondTextBlock}>
                    <Text style={styles.secondTextBlockTitle}>Withdrawal Amount:</Text>
                    <Text style={styles.secondTextBlockSubTitle}>
                        {amount} {currency}
                    </Text>
                </View>
                <View style={styles.secondTextBlock}>
                    <Text style={styles.secondTextBlockTitle}>Withdrawal Fee:</Text>
                    <Text style={styles.secondTextBlockSubTitle}>
                        {fee} {currency}
                    </Text>
                </View>
            </View>
            <View style={styles.totalBlock}>
                <Text style={styles.totalBlockTitle}>Total Withdrawal Amount</Text>
                <Text style={styles.totalBlockSubTitle}>
                    {+amount - +fee} {currency}
                </Text>
            </View>
            <View style={styles.otpInputContainer}>
                <Text style={styles.otpInputContainerText}>Enter 2fa code from the Google Authenticator app</Text>
                <OTPInput code={otp} setCode={setOtp} maximumLength={6} />
            </View>
            <View style={styles.buttonContainer}></View>
            <Button onPress={createWithdrawalHandler} title="Withdraw" isLoading={isLoading} />
        </View>
    );
};
