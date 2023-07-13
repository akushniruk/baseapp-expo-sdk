import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { documentsFormStyles } from "./documentsForm.styles";

export const DocumentsForm = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => documentsFormStyles(theme), [theme]);

    return (
        <View>
            <Text>Documents Verification</Text>
        </View>
    );
};
