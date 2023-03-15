import React, { FC, useMemo } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";
import { secondaryButtonStyles } from "./secondaryButton.styles";

interface SecondaryButtonProps extends PressableProps {
    title: string;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
    title,
    testID,
    onPress,
}: SecondaryButtonProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => secondaryButtonStyles(theme), [theme]);

    return (
        <Pressable
            style={styles.secondaryButton}
            onPress={onPress}
            testID={testID}
        >
            <Text style={styles.secondaryButton}>{title}</Text>
        </Pressable>
    );
};
