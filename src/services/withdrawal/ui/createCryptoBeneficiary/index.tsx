import BottomSheet from "@gorhom/bottom-sheet";
import { useLinkTo } from "@react-navigation/native";
import React, { FC, useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Controller, FieldValues, SubmitHandler, UseControllerReturn, useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { Button, Input, OTPInput, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Modal } from "../../../../shared/ui/modal";
import { Currency } from "../../../currencies/model/type";
import { Network } from "../../../networks/model/type";
import { IWallet } from "../../../wallets/api/types";
import { CreateBeneficiaryRequest, useCreateBeneficiaryMutation } from "../../api/beneficiaryApi";
import { createBeneciarySchema, CreateBeneficiaryResolver, CreateBeneficiaryType } from "../../libs/schema";
import { createBeneficiaryStyles } from "./createCryptoBeneficiary.styles";
import { User } from "../../../user";
import { SelectIcon } from "../../../../assets/system/selector";

export const CreateCryptoBeneficiary: FC = () => {
    const [createBeneficiary, { isLoading, isSuccess }] = useCreateBeneficiaryMutation();

    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = useMemo(() => createBeneficiaryStyles(theme), [theme]);

    const schemaInputFields: string[] = createBeneciarySchema.keyof()._def.values;

    const [blockchainKey, setBlockchainKey] = useState<string>("");
    const [otp, setOtp] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);
    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);
    const currencies: Currency[] | null = useAppSelector((state: RootState) => state.currency.list);

    const currency: Currency | null = useMemo(
        () => currencies?.find((item) => item.id === wallet?.currency) || null,
        [currencies, wallet]
    );

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        // Warning: onChange can bring issue with performance
        mode: "onChange",
        resolver: CreateBeneficiaryResolver,
    });

    useEffect(() => {
        if (isSuccess) {
            reset({ name: "", address: "" });
            setOtp("");
            setBlockchainKey("");
            process.env.REACT_APP_MODE !== "storybook" && linkTo("/ConfirmBeneficiary");
        }
    }, [isSuccess]);

    const buttonDisabled = () => (!watch("name")?.length && !watch("address")?.length) || Object.keys(errors).length;

    const onSubmitHandler: SubmitHandler<CreateBeneficiaryType> = (data) => {
        if (wallet?.currency) {
            const dataWithOtp: CreateBeneficiaryRequest = {
                name: data.name,
                currency: wallet?.currency,
                otp: otp,
                blockchain_key: blockchainKey,
                data: {
                    address: data.address,
                    description: data.description,
                },
            };

            createBeneficiary(dataWithOtp);
        }
    };

    const renderInput = useCallback(
        ({ field }: UseControllerReturn) => (
            <View style={styles.inputWrapper}>
                <Input
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder={field.name}
                    label={field.name}
                    testID={field.name}
                />
                {errors && <Text style={styles.error}>{errors[`${field.name}`]?.message as string}</Text>}
            </View>
        ),
        [schemaInputFields, control]
    );

    const renderInputFields = useMemo(() => {
        return schemaInputFields.map((name: string) => {
            return (
                <Controller key={name} control={control} rules={{ required: true }} name={name} render={renderInput} />
            );
        });
    }, [schemaInputFields, control]);

    const handleBlockchainKey = (blockchainKey: string) => {
        setBlockchainKey(blockchainKey);
        bottomSheetRef?.current?.forceClose();
        setIsOpen(false);
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
                    onPress={() => setIsOpen(true)}
                >
                    <Text style={styles.networkSelectorText}>{blockchainKey ? blockchainKey : "Select network"}</Text>
                    <SelectIcon width={18} />
                </Pressable>
            </>
        );
    };

    const renderNetworks = (network: Network) => {
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
                onPress={() => handleBlockchainKey(network.blockchain_key)}
            >
                <View style={styles.networkItemContainer}>
                    {network?.status ? (
                        <View style={styles.networkItemDisabledContainer}>
                            <Text style={styles.networkItemDisabledText}>Disabled</Text>
                        </View>
                    ) : null}
                    <View style={styles.networkItemRow}>
                        <View style={styles.networkItemProtocol}>
                            <Text style={styles.networkItemText}>
                                {network?.protocol?.toUpperCase()} {currency?.name}({currency?.id?.toUpperCase()})
                            </Text>
                        </View>

                        <View style={styles.networkItemRow}>
                            <Text style={styles.networkItemLabel}>Min. Withdrawal:</Text>
                            <Text style={styles.networkItemValue}>
                                {network?.min_withdraw_amount}
                                <Text style={styles.networkItemValueCode}> {wallet?.currency?.toUpperCase()}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.networkItem}>
                        <Text style={styles.networkItemLabel}>Network Fee:</Text>
                        <Text style={styles.networkItemValue}>
                            {network?.withdraw_fee}
                            <Text style={styles.networkItemValueCode}> {wallet?.currency?.toUpperCase()}</Text>
                        </Text>
                    </View>
                </View>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                {renderInputFields}
                {renderNetworkSelector()}
                <View>
                    <Text style={styles.otpLabel}>Enter 2FA code from Google Authenticator app</Text>
                    <OTPInput code={otp} setCode={setOtp} maximumLength={6} emptyInputSymbol="*" />
                </View>

                <Button
                    isLoading={isLoading}
                    disabled={!!buttonDisabled()}
                    title="Create"
                    onPress={handleSubmit(onSubmitHandler as SubmitHandler<FieldValues>)}
                />
            </View>
            <Modal snapPoints={["60%", "80%"]} bottomSheetRef={bottomSheetRef} isOpen={isOpen} setIsOpen={setIsOpen}>
                <View style={styles.containerNetworkModal}>{currency?.networks?.map(renderNetworks)}</View>
            </Modal>
        </View>
    );
};
