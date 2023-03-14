import React, { FC } from "react";
import {
    TextInput,
    Text,
    TextInputProps,
    StyleSheet,
    View,
} from "react-native";
import { getPalette } from "../../libs/getPalette";

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
}: InputProps) => {
    return (
        <View style={styles.fieldWrapper}>
            <Text style={styles.label}>{label}</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    fieldWrapper: {},
    label: {
        textTransform: "capitalize",
        marginBottom: 4,
        color: getPalette()["text-color"][70].value,
    },
    input: {
        color: getPalette()["text-color"][90].value,
        padding: 12,
        fontSize: 16,
        borderColor: getPalette()["text-color"][20].value,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor:
            getPalette().Background["input-background-color"].value,
    },
});
