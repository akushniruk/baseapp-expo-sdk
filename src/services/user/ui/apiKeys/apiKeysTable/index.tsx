import React, { FC } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../../../shared";
// import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../../shared/providers/redux/model/store";
import { User } from "../../../api/types";

export const ApiKeysTable: FC = () => {
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
            <Text>ApiKeysTable</Text>
        </View>
    );
};
