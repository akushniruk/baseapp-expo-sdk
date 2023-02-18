import React, { FC } from "react";
import {
    TextInput,
    Text,
    TextInputProps,
    StyleSheet,
    View,
} from "react-native";
import { Colors } from "../../styles/themes/defaultColors";

interface InputProps extends TextInputProps {
    label: string;
}

const Input: FC<any> = (props: InputProps) => {
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
    fieldWrapper: {
        marginBottom: 16,
    },
    label: {
        textTransform: "capitalize",
        marginBottom: 4,
        color: Colors["text-color-70"],
    },
    input: {
        color: Colors["text-color-90"],
        padding: 12,
        fontSize: 16,
        borderColor: Colors["divider-color-20"],
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: Colors["input-background-color"],
    },
});

export default Input;
