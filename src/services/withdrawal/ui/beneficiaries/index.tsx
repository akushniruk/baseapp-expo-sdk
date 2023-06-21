import { useLinkTo } from "@react-navigation/native";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { Button, OTPInput, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { IWallet } from "../../../wallets/api/types";
import {
    useDeleteBeneficiaryMutation,
    useGetBeneficiariesMutation,
    useResendPinBeneficiaryMutation,
} from "../../api/beneficiaryApi";
import { IBeneficiary } from "../../api/types";
import { beneficiariesStyles } from "./beneficiaries.styles";
import { useAppDispatch } from "../../../../shared/providers/redux/lib/useAppDispatch";
import { dispatchAlert } from "../../../../shared/ui/alerts";
import { setBeneficiary } from "../../model/beneficiarySlice";
import { Currency } from "../../../currencies/model/type";
import { truncateMiddle } from "../../../../shared/libs/truncateMiddle";
import { Network } from "../../../networks/model/type";
import { TrashIcon } from "../../../../assets/system/trash";
import { Modal } from "../../../../shared/ui/modal";
import BottomSheet from "@gorhom/bottom-sheet";

// TODO: add disabled
export const Beneficiaries: FC = () => {
    const dispatch = useAppDispatch();
    const linkTo = useLinkTo();

    const [getBeneficiaries, { isLoading, isSuccess }] = useGetBeneficiariesMutation();
    const [rensendPinBeneficiary, { isLoading: isResendPinLoading, isSuccess: isResendPinSuccess }] =
        useResendPinBeneficiaryMutation();
    const [deleteBeneficiary, { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess }] =
        useDeleteBeneficiaryMutation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedBeneficiaryId, setSelectedBeneficiaryId] = useState<string | number>("");
    const [otp, setOtp] = useState<string>("");

    const bottomSheetRef = useRef<BottomSheet>(null);

    const { theme } = useThemeContext();
    const styles = useMemo(() => beneficiariesStyles(theme), [theme]);

    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);
    const currencies: Currency[] | null = useAppSelector((state: RootState) => state.currency.list);
    const beneficiaries: IBeneficiary[] | null = useAppSelector((state: RootState) => state.beneficiary.list);

    const currencyCodeUpperCase = wallet?.currency?.toUpperCase();

    const currency: Currency | null = useMemo(
        () => currencies?.find((item) => item.id === wallet?.currency) || null,
        [currencies, wallet]
    );

    const uniqueBlockchainKeys = useMemo(
        () => new Set(beneficiaries.map((item) => item.blockchain_key)),
        [beneficiaries]
    );

    useEffect(() => {
        if (wallet?.currency) {
            getBeneficiaries({ currency: wallet.currency.toLowerCase() });
        }
    }, [wallet]);

    useEffect(() => {
        if (isResendPinSuccess) {
            linkTo("/ConfirmBeneficiary");
        }
    }, [isResendPinSuccess]);

    const handleRedirect = () => {
        if (wallet?.type === "coin") {
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

    const selectBeneficiary = (beneficiary: IBeneficiary) => {
        if (beneficiary.state === "pending") {
            rensendPinBeneficiary({ id: beneficiary.id });
            dispatch(setBeneficiary(beneficiary));
        } else {
            dispatch(setBeneficiary(beneficiary));
            linkTo("/Withdrawal");
        }
    };

    const handleState = (state: string) => {
        switch (state) {
            case "pending":
                return (
                    <View style={styles.beneficiarySelectorStatePending}>
                        <Text style={styles.beneficiarySelectorStateText}>Pending</Text>
                    </View>
                );
            case "active":
                return (
                    <View style={styles.beneficiarySelectorStateContainer}>
                        <Text style={styles.beneficiarySelectorStateText}>Active</Text>
                    </View>
                );

            default:
                return null;
        }
    };

    const handleOpenDeleteModal = (beneficiaryId: string | number) => {
        setIsModalOpen(true);
        setSelectedBeneficiaryId(beneficiaryId);
    };

    const handleDelete = () => {
        deleteBeneficiary({ id: selectedBeneficiaryId, otp });
        setOtp("");
        bottomSheetRef?.current?.forceClose();
        setIsModalOpen(false);
    };

    const renderBeneficiariesList = (beneficiary: IBeneficiary, network: Network) => {
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
                onPress={() => selectBeneficiary(beneficiary)}
                disabled={network.status === "disabled"}
            >
                <View>
                    <Text>{beneficiary?.name}</Text>
                    <Text>{beneficiary ? truncateMiddle(beneficiary.data.address, 25) : 10}</Text>
                </View>
                <View style={styles.beneficiarySelectorRight}>
                    {handleState(beneficiary?.state)}
                    <Pressable style={styles.deleteButton} onPress={() => handleOpenDeleteModal(beneficiary.id)}>
                        <TrashIcon />
                    </Pressable>
                </View>
            </Pressable>
        );
    };

    const renderUniqueBlockchainKeys = (blockchainKey: string) => {
        const network = currency?.networks?.find((item) => item.blockchain_key === blockchainKey);
        const beneficiariesByNetwork = beneficiaries?.filter((item) => item.blockchain_key === blockchainKey);

        if (!network || !beneficiariesByNetwork?.length) {
            return null;
        }

        return (
            <View>
                <View style={styles.networkContainer}>
                    <View style={styles.networkRow}>
                        <Text style={styles.networkRowTitle}>{network.protocol?.toUpperCase()} Addresses</Text>
                        <View style={styles.networkSubRow}>
                            <Text style={styles.networkSubRowTitle}>Fee: </Text>
                            <Text style={styles.networkSubRowSubTitle}>
                                {network.withdraw_fee} {currencyCodeUpperCase}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.networkName}>
                        {beneficiariesByNetwork[0].blockchain_name} ({currencyCodeUpperCase})
                    </Text>
                    <View style={styles.networkMinRow}>
                        <Text style={styles.networkMinRowTitle}>Min. withdrawal:</Text>
                        <Text style={styles.networkMinRowSubTitle}>
                            {network.min_withdraw_amount} {currencyCodeUpperCase}
                        </Text>
                    </View>
                </View>
                {beneficiariesByNetwork.map((beneficiary: IBeneficiary) =>
                    renderBeneficiariesList(beneficiary, network)
                )}
            </View>
        );
    };

    const renderNoData = () => {
        return (
            <View style={styles.noData}>
                <NoDataIcon />
                <Text style={styles.noDataText}>Add your first Beneficiary</Text>
                <Button onPress={handleRedirect} title="Create" isLoading={false} />
            </View>
        );
    };

    if (!beneficiaries?.length) {
        return <View style={styles.container}>{renderNoData()}</View>;
    }

    return (
        <View>
            <View style={styles.container}>{Array.from(uniqueBlockchainKeys).map(renderUniqueBlockchainKeys)}</View>
            <Modal snapPoints={["80%"]} bottomSheetRef={bottomSheetRef} isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <View style={styles.modalContainer}>
                    <Text style={styles.label}>Enter 2fa code from the Google Authenticator app</Text>
                    <OTPInput code={otp} setCode={setOtp} maximumLength={6} emptyInputSymbol="*" />

                    <Button onPress={handleDelete} title="Delete" isLoading={isLoading} disabled={!otp} />
                </View>
            </Modal>
        </View>
    );
};
