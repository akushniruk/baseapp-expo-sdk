import React, { FC, useMemo } from "react";
import { TextInput, Text, TextInputProps, View } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";
import { inputStyles } from "./input.styles";

interface InputProps extends TextInputProps {
    label: string;
}

export const Input: FC<InputProps> = ({
    label,
    value,
    placeholder,
    secureTextEntry,
    testID,
    keyboardType,
    onBlur,
    onChangeText,
    autoComplete,
    textContentType,
}: InputProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => inputStyles(theme), [theme]);

    return (
        <View style={styles.fieldWrapper}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                testID={testID}
                keyboardType={keyboardType}
                placeholderTextColor={styles.placeholder.color}
                keyboardAppearance={theme === "dark" ? "dark" : "light"}
                textContentType={textContentType}
                autoComplete={autoComplete}
            />
        </View>
    );
};
