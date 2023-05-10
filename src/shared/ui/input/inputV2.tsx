import React, { FC, useMemo } from "react";
import { TextInput, Text, TextInputProps, View } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";
import { inputV2Styles } from "./inputV2.styles";

interface InputV2Props extends TextInputProps {
    label: string;
    symbol: string;
}

export const InputV2: FC<InputV2Props> = ({
    label,
    value,
    symbol,
    placeholder,
    secureTextEntry,
    testID,
    keyboardType,
    onBlur,
    onChangeText,
}: InputV2Props) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => inputV2Styles(theme), [theme]);

    return (
        <View style={styles.fieldWrapper}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    testID={testID}
                    keyboardType={keyboardType}
                />
                <View style={styles.symbol}>
                    <Text style={styles.symbolText}>{symbol}</Text>
                </View>
            </View>
        </View>
    );
};
