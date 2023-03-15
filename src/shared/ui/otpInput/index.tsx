import React, { createRef, useState, FC, useCallback, useMemo } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import { SecondaryButton } from "../secondaryButton";
import { useThemeContext } from "../../hooks/useThemeContext";
import { otpInputStyles } from "./otpInput.styles";

interface OTPInputProps {
    code: string;
    setCode: (code: string) => void;
    maximumLength: number;
    emptyInputSymbol?: string;
}

export const OTPInput: FC<OTPInputProps> = ({
    code,
    setCode,
    maximumLength,
    emptyInputSymbol = "X",
}: OTPInputProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => otpInputStyles(theme), [theme]);

    const boxArray: number[] = new Array(maximumLength).fill(0);
    const inputRef = createRef<TextInput>();

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    const fetchCopiedText = useCallback(async () => {
        const text = await Clipboard.getStringAsync();

        setCode(text);
    }, []);

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
