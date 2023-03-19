import React, { FC, useMemo } from "react";
import { View, Text, Image } from "react-native";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useMemberMeQuery } from "../../api/peatioMember";
import { Label, Member, User } from "../../api/types";
import { userInfoFormStyles } from "./userInfo.styles";

// TODO: get from config
const kycLabels = ["email", "phone", "profile", "document", "address"];

export const UserInfo: FC = () => {
    useMemberMeQuery();
    const { theme } = useThemeContext();
    const styles = useMemo(() => userInfoFormStyles(theme), [theme]);

    const user: User = useAppSelector((state: RootState) => state.user.profile);
    const peatioMember: Member = useAppSelector(
        (state: RootState) => state.user.peatioMember
    );

    const getCurrentUserVerificationStatus = useMemo(() => {
        if (user?.labels && kycLabels) {
            if (user?.labels.length === kycLabels.length) {
                const verifiedLabels = user?.labels.map(
                    (label: Label, index: number) => {
                        if (
                            label.key === kycLabels[index] &&
                            label.value === "verified"
                        ) {
                            return kycLabels[index];
                        }
                    }
                );

                if (
                    verifiedLabels?.every(
                        (label: string | undefined) => label !== undefined
                    )
                ) {
                    // TODO: add translations
                    return "Verified";
                }
            }

            // TODO: add translations
            return "Unverified";
        }

        return null;
    }, [user?.level]);

    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Image
                    style={styles.icon}
                    source={require("../../../../assets/profile.png")}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.username}>
                        {user?.username || user?.uid}
                    </Text>
                    <View style={styles.details}>
                        <View style={styles.labelWrapper}>
                            <Text style={styles.labelIcon}>i</Text>
                            <Text style={styles.label}>
                                {getCurrentUserVerificationStatus}
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.labelWrapper,
                                styles.feeGroupBackground,
                            ]}
                        >
                            <Text style={styles.labelIcon}>i</Text>
                            <Text style={styles.feeGroupText}>
                                {peatioMember?.group}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.arrowRight}>icon</Text>
        </View>
    );
};
