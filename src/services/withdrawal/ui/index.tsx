import { useLinkTo } from "@react-navigation/native";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useAppSelector, Button, useAppDispatch, Input } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { RootState } from "../../../shared/providers/redux/model/store";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { IWallet } from "../../wallets/api/types";
import { withdrawalStyles } from "./withdrawal.styles";
import { IBeneficiary } from "../api/types";
import { SelectIcon } from "../../../assets/system/selector";
import { useGetBeneficiariesMutation } from "../api/beneficiaryApi";
import { setBeneficiary } from "../model/beneficiarySlice";
import { Currency } from "../../currencies/model/type";
import { Network } from "../../networks/model/type";
import { User } from "../../user";
import BottomSheet from "@gorhom/bottom-sheet";
import { Modal } from "../../../shared/ui/modal";
import { truncateMiddle } from "../../../shared/libs/truncateMiddle";

export const Withdrawal: FC = () => {
    const [getBeneficiaries, { isLoading, isSuccess }] = useGetBeneficiariesMutation();

    const dispatch = useAppDispatch();
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = useMemo(() => withdrawalStyles(theme), [theme]);

    const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
    const [amount, setAmount] = useState<string>("");
    const [isReceiptOpen, setIsReceiptOpen] = useState<boolean>(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);
    const beneficiary: IBeneficiary | null = useAppSelector((state: RootState) => state.beneficiary.beneficiary);
    const beneficiaries: IBeneficiary[] = useAppSelector((state: RootState) => state.beneficiary.list);
    const currencies: Currency[] | null = useAppSelector((state: RootState) => state.currency.list);
    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);

    const currency: Currency | null = useMemo(
        () => currencies?.find((item) => item.id === wallet?.currency) || null,
        [currencies, wallet]
    );

    useEffect(() => {
        if (wallet?.currency) {
            getBeneficiaries({ currency: wallet.currency.toLowerCase() });
        }
    }, [wallet]);

    useEffect(() => {
        if (currency?.networks) {
            setSelectedNetwork(currency.networks[0]);
        }
    }, [currency]);

    useEffect(() => {
        if (!beneficiary && beneficiaries?.length) {
            dispatch(setBeneficiary(beneficiaries[0]));
        }
    }, [beneficiaries]);

    const handleRedirect = (path: string) => {
        if (wallet?.type === "coin") {
            linkTo(path);
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

    const renderBeneficiarySelector = () => {
        return (
            <View>
                <Pressable
                    style={({ pressed }) => [
                        styles.beneficiarySelector,
                        {
                            backgroundColor: pressed
                                ? styles.beneficiarySelectorPressed.backgroundColor
                                : styles.beneficiarySelector.backgroundColor,
                        },
                    ]}
                    onPress={() => handleRedirect("/Beneficiaries")}
                >
                    <View>
                        <Text>{beneficiary?.name}</Text>
                        <Text>{beneficiary ? truncateMiddle(beneficiary.data.address, 25) : 10}</Text>
                    </View>
                    <View style={styles.beneficiarySelectorRight}>
                        <View style={styles.beneficiarySelectorStateContainer}>
                            {/* TODO: handle pending state */}
                            <Text style={styles.beneficiarySelectorStateText}>{beneficiary?.state}</Text>
                        </View>
                        <SelectIcon />
                    </View>
                </Pressable>
                <View style={styles.networkContainer}>
                    <Text style={styles.networkLabel}>Network</Text>
                    <View style={styles.networkNameContainer}>
                        <Text>
                            {wallet?.name} {wallet?.currency?.toUpperCase()}
                        </Text>
                        <Text>
                            Fee: {selectedNetwork?.withdraw_fee} {wallet?.currency?.toUpperCase()}
                        </Text>
                    </View>
                    <View>
                        <Text>{selectedNetwork?.protocol}</Text>
                    </View>
                </View>
            </View>
        );
    };

    const renderAddAddress = () => {
        return (
            <Pressable
                style={({ pressed }) => [
                    styles.beneficiarySelector,
                    {
                        backgroundColor: pressed
                            ? styles.beneficiarySelectorPressed.backgroundColor
                            : styles.beneficiarySelector.backgroundColor,
                    },
                ]}
                onPress={() => handleRedirect("/CreateCryptoBeneficiary")}
            >
                <Text>Add Address</Text>
            </Pressable>
        );
    };

    return (
        <View>
            <View style={styles.container}>
                {beneficiaries?.length ? renderBeneficiarySelector() : renderAddAddress()}
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <Input
                            value={amount}
                            keyboardType="numeric"
                            label="Withdrawal amount"
                            placeholder={`Minimum ${
                                selectedNetwork?.min_withdraw_amount
                            } ${wallet?.currency?.toUpperCase()}`}
                            onChangeText={(text: string) => setAmount(text)}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <Button title="Max" isLoading={false} />
                    </View>
                </View>
                <View style={styles.totalContainer}>
                    <View>
                        <Text style={styles.totalLabel}>Receive amount</Text>
                        <Text style={styles.total}>
                            {amount + (selectedNetwork?.withdraw_fee ? +selectedNetwork?.withdraw_fee : 0)}{" "}
                            {wallet?.currency.toUpperCase()}
                        </Text>
                        <Text style={styles.totalFee}>
                            Fee: {selectedNetwork?.withdraw_fee} {wallet?.currency?.toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.totalButtonContainer}>
                        <Button onPress={() => setIsReceiptOpen(true)} title="Withdraw" isLoading={false} />
                    </View>
                </View>
            </View>
            <Modal
                snapPoints={["60%", "80%"]}
                bottomSheetRef={bottomSheetRef}
                isOpen={isReceiptOpen}
                setIsOpen={setIsReceiptOpen}
            >
                <View style={styles.receiptContainer}>
                    <Text>Receipt</Text>
                </View>
            </Modal>
        </View>
    );
};
