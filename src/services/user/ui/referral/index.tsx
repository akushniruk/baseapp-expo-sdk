import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { CopyField } from "../../../../shared/ui/copyField";
import { User } from "../../api/types";
import { referralStyles } from "./referral.style";

export const Referral: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => referralStyles(theme), [theme]);

    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);

    return (
        <View>
            <Text style={styles.title}>Inivte Friends.</Text>
            <Text style={styles.title}>Earn Crypto Together</Text>
            <Text style={styles.subtitle}>Earn up to 40% commission every time your friends make a trade</Text>
            <View>
                <View style={styles.copyFieldContainer}>
                    <CopyField title="Referral ID" value={profile?.uid || ""} />
                </View>
                <CopyField
                    title="Referral Link"
                    value={`https://${process.env.REACT_APP_DOMAIN_NAME}/signup?refid=${profile?.uid || ""}`}
                />
            </View>
        </View>
    );
};
