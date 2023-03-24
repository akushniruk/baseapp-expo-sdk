import React, { FC, useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { VerificationBlockProps } from "./interface";
import { ArrowRightIcon } from "../../../../../assets/profile/arrowRight";
import { VerificationImages } from "../../../../../assets/profile/verification/VerificationImages";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { verificationBlockStyles } from "./verificationBlock.styles";

export const VerificationBlock: FC<VerificationBlockProps> = ({ step, isVerified }: VerificationBlockProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => verificationBlockStyles(theme), [theme]);

    return (
        <Pressable style={styles.container} onPress={() => console.log("redirect to step: ", step)}>
            <View style={styles.containerIcons}>
                <VerificationImages step={step} isVerified={isVerified} />
                <ArrowRightIcon />
            </View>
            <Text style={styles.title}>{step}</Text>
        </Pressable>
    );
};
