import React, { FC } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../../shared";
// import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { User } from "../../api/types";

export const Referral: FC = () => {
    // const { theme } = useThemeContext();
    // const styles = useMemo(() => profileDetailsStyles(theme), [theme]);

    const profile: User | null = useAppSelector(
        (state: RootState) => state.user.profile
    );

    // const copyToClipboard = useCallback(async () => {
    //     await Clipboard.setStringAsync(profile?.uid || "");
    // }, [profile]);

    return (
        <View>
            <Text>Inivte Friends</Text>
            <Text>Earn Crypto Together</Text>
            <Text>
                Earn up to 40% commission every time your friends make a trade
            </Text>
            <View>
                <View>
                    <Text>Referral link</Text>
                    <Text>ref=UID1231231232131232131</Text>
                </View>
            </View>
        </View>
    );
};
