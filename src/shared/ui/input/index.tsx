import React, { FC } from "react";
import {
    TextInput,
    Text,
    TextInputProps,
    StyleSheet,
    View,
} from "react-native";
import { Palette } from "../../styles/themes/defaultPalette";

interface InputProps extends TextInputProps {
    label: string;
}

export const Input: FC<InputProps> = (props) => {
    return (
        <View style={styles.fieldWrapper}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                onBlur={props.onBlur}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                testID={props.testID}
                keyboardType={props.keyboardType}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fieldWrapper: {},
    label: {
        textTransform: "capitalize",
        marginBottom: 4,
        color: Palette["text-color"][70].value,
    },
    input: {
        color: Palette["text-color"][90].value,
        padding: 12,
        fontSize: 16,
        borderColor: Palette["text-color"][20].value,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: Palette.Background["input-background-color"].value,
    },
});
