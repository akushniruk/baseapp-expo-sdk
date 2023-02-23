import React, { createRef, useState, useEffect, FC, useCallback } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import { Palette } from "../../styles/themes/defaultPalette";
import * as Clipboard from "expo-clipboard";
import SecondaryButton from "../secondaryButton";

interface OTPInputProps {
    code: string;
    setCode: (code: string) => void;
    maximumLength: number;
    emptyInputSymbol?: string;
}

const OTPInput: FC<OTPInputProps> = ({
    code,
    setCode,
    maximumLength,
    emptyInputSymbol = "X",
}) => {
    const boxArray: number[] = new Array(maximumLength).fill(0);
    const inputRef = createRef<TextInput>();

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCode(text);
    };

    const handleOnPress = useCallback(() => {
        setIsInputBoxFocused(true);

        inputRef?.current?.focus();
    }, [inputRef, setIsInputBoxFocused]);

    const handleOnBlur = useCallback(() => {
        setIsInputBoxFocused(false);
    }, [setIsInputBoxFocused]);

    const boxDigit = useCallback(
        (_: number, index: number) => {
            const digit = code[index] || emptyInputSymbol;

            const isCurrentValue = index === code.length;
            const isLastValue = index === maximumLength - 1;
            const isCodeComplete = code.length === maximumLength;

            const isValueFocused =
                isCurrentValue || (isLastValue && isCodeComplete);

            return (
                <View
                    style={
                        isInputBoxFocused && isValueFocused
                            ? [styles.splitBoxes, styles.splitBoxesFocused]
                            : styles.splitBoxes
                    }
                    key={index}
                >
                    <Text style={styles.splitBoxText}>{digit}</Text>
                </View>
            );
        },
        [code, emptyInputSymbol]
    );

    return (
        <View style={styles.otpInputContainer}>
            <View style={styles.boxAndPastContainer}>
                <Pressable
                    style={styles.splitOTPBoxesContainer}
                    onPress={handleOnPress}
                >
                    {boxArray.map(boxDigit)}
                </Pressable>
                <SecondaryButton title="Paste" onPress={fetchCopiedText} />
            </View>
            <TextInput
                style={styles.textInputHidden}
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                keyboardType="number-pad"
                onBlur={handleOnBlur}
            />
        </View>
    );
};

export default OTPInput;

const styles = StyleSheet.create({
    otpInputContainer: {
        marginBottom: 24,
    },
    boxAndPastContainer: {
        flexDirection: "row",
        maxHeight: 40,
        justifyContent: "space-between",
    },
    textInputHidden: {
        borderColor: "transparent",
        color: "transparent",
        position: "absolute",
        opacity: 0,
    },
    splitOTPBoxesContainer: {
        flexDirection: "row",
    },
    splitBoxes: {
        backgroundColor: Palette.Background["input-background-color"].value,
        borderColor: Palette.Controls["neutral-control-color"][70].value,
        borderWidth: 2,
        borderRadius: 4,
        marginLeft: 6,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 40,
        minHeight: 40,
    },
    splitBoxText: {
        fontSize: 14,
        textAlign: "center",
        color: Palette["text-color"][50].value,
    },
    splitBoxesFocused: {
        borderColor: Palette.Controls["primary-cta-color"][60].value,
        backgroundColor: Palette.Background["input-background-color"].value,
        color: Palette["text-color"][100].value,
    },
});
