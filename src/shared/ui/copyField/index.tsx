import React, { FC, useMemo, useCallback, useState } from "react";
import { TouchableHighlight, TouchableHighlightProps, Text, View } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";
import { copyFieldStyles } from "./copyField.styles";
import { Copy } from "../../../assets/system/copy";
import * as Clipboard from "expo-clipboard";
import { useDispatch } from "react-redux";
import { dispatchAlert } from "../alerts";
import { truncateMiddle } from "../../libs/truncateMiddle";

export interface CopyFieldProps extends TouchableHighlightProps {
    title: string;
    value: string;
    testId?: string;
}

export const CopyField: FC<CopyFieldProps> = ({ title, value, testID }: CopyFieldProps) => {
    const dispatch = useDispatch();
    const { theme } = useThemeContext();
    const styles = useMemo(() => copyFieldStyles(theme), [theme]);

    const handlePress = useCallback(async () => {
        await Clipboard.setStringAsync(value || "");
        dispatch(
            dispatchAlert({
                type: "success",
                messageType: "success",
                messageText: "Copied to clipboard",
            })
        );
    }, [value]);

    return (
        <TouchableHighlight
            style={styles.container}
            activeOpacity={0.64}
            underlayColor={styles.touchHighlight.color}
            onPress={handlePress}
            testID={testID}
        >
            <>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>{truncateMiddle(value, 40)}</Text>
                    <Copy width={12} color={styles.copyColor.color} />
                </View>
            </>
        </TouchableHighlight>
    );
};
