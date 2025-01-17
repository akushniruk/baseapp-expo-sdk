import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StarFeeGroup } from "../../../../assets/profile";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useMemberMeQuery } from "../../api/peatioMember";
import { Label, Member, User } from "../../api/types";
import { profileDetailsStyles } from "./profileDetails.styles";
import { VerificationBlock } from "./VerificationBlock";
import * as Clipboard from "expo-clipboard";
import { Copy } from "../../../../assets/profile/profileDetails/copy";
import { RegisterInfoIcon } from "../../../../assets/profile/profileDetails/registerInfoIcon";
import { UidIcon } from "../../../../assets/profile/profileDetails/uidIcon";
import { ArrowRightIcon } from "../../../../assets/profile/arrowRight";
import { useLinkTo } from "@react-navigation/native";

// TODO: get from config
const kycSteps = ["email", "phone", "profile", "document", "address"];

export const ProfileDetails: FC = () => {
    const linkTo = useLinkTo();

    useMemberMeQuery();
    const { theme } = useThemeContext();
    const styles = useMemo(() => profileDetailsStyles(theme), [theme]);

    const profile: User | null = useAppSelector(
        (state: RootState) => state.user.profile
    );
    const peatioMember: Member | null = useAppSelector(
        (state: RootState) => state.user.peatioMember
    );

    const redirectToVerificationCenter = useCallback(() => {
        // TODO: apply storybook redirect
        process.env.REACT_APP_MODE !== "storybook" &&
            linkTo("/VerificationCenter");
    }, []);

    const renderVerificationBlock = useMemo(() => {
        return kycSteps.map((step: string, index: number) => {
            const isVerified = profile?.labels.find(
                (label: Label) =>
                    label.key === step &&
                    (label.value === "verified" || label.value === "verify")
            );

            return (
                <VerificationBlock
                    key={step}
                    index={index}
                    isVerified={!!isVerified}
                    step={step}
                />
            );
        });
    }, []);

    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(profile?.uid || "");
    }, [profile]);

    return (
        <View style={styles.container}>
            <View style={styles.profileImageWrapper}>
                <Image
                    style={styles.profileImage}
                    source={require("../../../../assets/profile/profile.png")}
                />
            </View>
            <Text style={styles.username}>
                {profile?.username || profile?.uid}
            </Text>
            <View style={styles.verificationContainer}>
                <Pressable
                    onPress={redirectToVerificationCenter}
                    style={styles.verificationContainerBlock}
                >
                    <View>
                        <Text style={styles.verificationContainerTitle}>
                            Verification
                        </Text>
                        <Text style={styles.verificationContainerSubTitle}>
                            To get platform benefits you need to pass the
                            verification
                        </Text>
                    </View>
                    <ArrowRightIcon color="#090909" />
                </Pressable>
                <View style={styles.verificationContainerBlocks}>
                    {renderVerificationBlock}
                </View>
            </View>
            <View style={styles.block}>
                <StarFeeGroup
                    color={styles.blockIcon.color}
                    width={24}
                ></StarFeeGroup>
                <Text style={styles.blockTitle}>{peatioMember?.group}</Text>
            </View>
            <View style={styles.secondaryBlock}>
                <View style={styles.block}>
                    <UidIcon color={styles.blockIcon.color} width={24} />
                    <View>
                        <Text style={styles.blockTitle}>UID</Text>
                        <Text style={styles.blockSubTitle}>{profile?.uid}</Text>
                    </View>
                </View>

                <Pressable style={styles.blockIcon} onPress={copyToClipboard}>
                    <Copy color={styles.blockIcon.color} width={14} />
                </Pressable>
            </View>
            <View style={styles.block}>
                <RegisterInfoIcon color={styles.blockIcon.color} width={24} />
                <View>
                    <Text style={styles.blockTitle}>Registration Info</Text>
                    <Text style={styles.blockSubTitle}>{profile?.email}</Text>
                </View>
            </View>
        </View>
    );
};
