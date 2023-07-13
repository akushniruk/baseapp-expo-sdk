import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { identityFormStyles } from "./identityForm.styles";

export const IdentityForm = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => identityFormStyles(theme), [theme]);

    return (
        <View>
            <Text>Identity Form Verification</Text>
        </View>
    );
};
