import React, { useMemo } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { verificationCenterStyles } from "./verificationCenter.styles";
import { useAppSelector } from "../../../../shared";
import { Label, User } from "../../api/types";

// TODO: get from config
const kycSteps = ["email", "phone", "profile", "document", "address"];

export const VerificationCenter = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => verificationCenterStyles(theme), [theme]);

    const profile: User | null = useAppSelector((state) => state.user.profile);

    const renderPersonalInformation = () => {
        if (!profile?.profiles?.length) {
            return <Text>No Data</Text>;
        }

        return (
            <View>
                <Text>Personal Information</Text>
                <View>
                    <Text>Full Name</Text>
                    <Text>
                        {profile.profiles[0].first_name} {profile.profiles[0].last_name}
                    </Text>
                </View>
                <View>
                    <Text>Date of Birth</Text>
                    <Text>{profile.profiles[0].dob}</Text>
                </View>
                <View>
                    <Text>Address</Text>
                    <Text>{profile.profiles[0].address}</Text>
                </View>
                <View>
                    <Text>City</Text>
                    <Text>{profile.profiles[0].city}</Text>
                </View>
            </View>
        );
    };

    const renderVerificationBlock = (title: string, status: string) => {
        return (
            <Pressable>
                <View>
                    <Text>Identity Verification</Text>
                    <Text>I</Text>
                </View>
                <View>
                    <Text>render description for verification</Text>
                </View>
                <View>
                    <Text>{`Verify ->`}</Text>
                </View>
                <View>
                    <Text>Background with status: Pending</Text>
                </View>
            </Pressable>
        );
    };

    const renderVerificationStep = (label: Label | undefined) => {
        if (!label) {
            return renderVerificationBlock("phone", "");
        }

        // we always should render next KYC step if prev passed
        switch (label.key) {
            case "phone":
                return renderVerificationBlock("phone", label.value);
            case "identity":
                return renderVerificationBlock("identity", label.value);
            case "document":
                return renderVerificationBlock("document", label.value);
            case "address":
                return renderVerificationBlock("address", label.value);
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileImageWrapper}>
                <Image style={styles.profileImage} source={require("../../../../assets/profile/profile.png")} />
            </View>
            <Text style={styles.username}>{profile?.email}</Text>
            <Text>{profile?.uid}</Text>
            <View>{renderVerificationStep(profile?.labels[profile?.labels.length - 1])}</View>
            <View>
                <Text>Account Limits</Text>
                <View>
                    <Text>Deposit and Trades</Text>
                    <Text>Allowed</Text>
                </View>
                <View>
                    <Text>Withdrawal Limit</Text>
                    <Text>10 BTC</Text>
                </View>
            </View>
            {renderPersonalInformation()}
        </View>
    );
};
