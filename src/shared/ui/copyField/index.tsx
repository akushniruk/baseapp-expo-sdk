import React, { FC, useMemo, useCallback } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";
import { copyFieldStyles } from "./copyField.styles";
import { getPalette } from "../../libs/getPalette";
import { Copy } from "../../../assets/system/copy";
import * as Clipboard from "expo-clipboard";

export interface CopyFieldProps extends PressableProps {
    title: string;
    value: string;
    testId?: string;
}

export const CopyField: FC<CopyFieldProps> = ({
    title,
    value,
    testID,
}: CopyFieldProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => copyFieldStyles(theme), [theme]);

    const handlePress = useCallback(async () => {
        await Clipboard.setStringAsync(value || "");
    }, [value]);

    return (
        <Pressable
            style={styles.container}
            onPress={handlePress}
            testID={testID}
        >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{value}</Text>
                <Copy width={12} color={styles.copyColor.color} />
            </View>
        </Pressable>
    );
};
