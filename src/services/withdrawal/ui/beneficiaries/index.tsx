import { useLinkTo } from "@react-navigation/native";
import React, { FC, useEffect, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { Button, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { IWallet } from "../../../wallets/api/types";
import { useGetBeneficiariesMutation } from "../../api/beneficiaryApi";
import { IBeneficiary } from "../../api/types";
import { beneficiariesStyles } from "./beneficiaries.styles";
import { useAppDispatch } from "../../../../shared/providers/redux/lib/useAppDispatch";
import { dispatchAlert } from "../../../../shared/ui/alerts";
import { setBeneficiary } from "../../model/beneficiarySlice";

export const Beneficiaries: FC = () => {
    const dispatch = useAppDispatch();
    const linkTo = useLinkTo();

    const [getBeneficiaries, { isLoading, isSuccess }] = useGetBeneficiariesMutation();

    const { theme } = useThemeContext();
    const styles = useMemo(() => beneficiariesStyles(theme), [theme]);

    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);
    const beneficiaries: IBeneficiary[] | null = useAppSelector((state: RootState) => state.beneficiary.list);

    useEffect(() => {
        if (wallet?.currency) {
            getBeneficiaries({ currency: wallet.currency.toLowerCase() });
        }
    }, [wallet]);

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

    const selectBeneficiary = (beneficiary: IBeneficiary) => {
        dispatch(setBeneficiary(beneficiary));
        linkTo("/Withdrawal");
    };

    const renderBeneficiariesList = (beneficiary: IBeneficiary) => {
        return (
            <Pressable onPress={() => selectBeneficiary(beneficiary)}>
                <Text>{beneficiary.name}</Text>
                <Text>{beneficiary.protocol}</Text>
            </Pressable>
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

    return (
        <View>
            <Text>Beneficiaries for {wallet?.currency}</Text>
            <View>{beneficiaries?.length ? beneficiaries.map(renderBeneficiariesList) : renderNoData()}</View>
        </View>
    );
};
