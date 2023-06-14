import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useLinkTo } from "@react-navigation/native";
import { AcceptedIcon, RejectedIcon, StarFeeGroup } from "../../../../../../assets/profile";
import { useAppSelector } from "../../../../../../shared";
import { useThemeContext } from "../../../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../../../shared/providers/redux/model/store";
import { useMemberMeQuery } from "../../api/peatioMember";
import { Label, Member, User } from "../../api/types";
import { profileStyles } from "./profile.styles";
import { ArrowRightIcon } from "../../../../../../assets/profile/arrowRight";

// TODO: get from config
const kycSteps = ["email", "phone", "profile", "document", "address"];

export const Profile: FC = () => {
    const linkTo = useLinkTo();

    useMemberMeQuery();
    const { theme } = useThemeContext();
    const styles = useMemo(() => profileStyles(theme), [theme]);

    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);
    const peatioMember: Member | null = useAppSelector((state: RootState) => state.user.peatioMember);

    const getCurrentUserVerificationStatus = useMemo(() => {
        if (profile?.labels && kycSteps) {
            if (profile?.labels.length === kycSteps.length) {
                const verifiedLabels = profile?.labels.map((label: Label, index: number) => {
                    if (label.key === kycSteps[index] && label.value === "verified") {
                        return kycSteps[index];
                    }
                });

                if (verifiedLabels?.every((label: string | undefined) => label !== undefined)) {
                    return true;
                }
            }

            return false;
        }

        return null;
    }, [profile?.level]);

    const verificationLabelStyles = useMemo(() => {
        return getCurrentUserVerificationStatus ? styles.verified : styles.unverified;
    }, [getCurrentUserVerificationStatus]);

    const renderLabelIcon = useMemo(() => {
        return getCurrentUserVerificationStatus ? (
            <AcceptedIcon color={styles.labelIconVerified.color} />
        ) : (
            <RejectedIcon color={styles.labelIconUnverified.color} />
        );
    }, []);

    const redirectToDetails = useCallback(() => {
        // TODO: apply storybook redirect
        process.env.REACT_APP_MODE !== "storybook" && linkTo("/Details");
    }, []);

    return (
        <Pressable onPress={redirectToDetails} style={styles.container}>
            <View style={styles.infoWrapper}>
                <Image style={styles.icon} source={require("../../../../assets/profile/profile.png")} />
                <View style={styles.infoContainer}>
                    <Text style={styles.username}>{profile?.username || profile?.uid}</Text>
                    <View style={styles.details}>
                        <View style={[styles.labelWrapper, verificationLabelStyles]}>
                            <View style={styles.labelIcon}>{renderLabelIcon}</View>
                            <Text style={verificationLabelStyles}>
                                {getCurrentUserVerificationStatus ? "Verified" : "Unverified"}
                            </Text>
                        </View>
                        <View style={[styles.labelWrapper, styles.feeGroupBackground]}>
                            <View style={styles.labelIcon}>
                                <StarFeeGroup width={14} color={styles.feeGroupText.color} />
                            </View>
                            <Text style={styles.feeGroupText}>{peatioMember?.group}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.arrowRight}>
                <ArrowRightIcon color="#090909" />
            </Text>
        </Pressable>
    );
};
