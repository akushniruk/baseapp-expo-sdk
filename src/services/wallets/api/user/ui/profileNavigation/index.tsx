import React, { FC, useCallback, useMemo } from "react";
import { Text, Pressable, View } from "react-native";
import { useThemeContext } from "../../../../../../shared/hooks/useThemeContext";
import { useLinkTo } from "@react-navigation/native";
import { profileNavigationStyles } from "./profileNavigation.stlyes";
import { ProfileNavigationProps } from "./interface";
import { ArrowRightIcon } from "../../../../../../assets/profile";

export const ProfileNavigation: FC<ProfileNavigationProps> = ({ option }: ProfileNavigationProps) => {
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = useMemo(() => profileNavigationStyles(theme), [theme]);

    const handleRedirect = useCallback(() => {
        process.env.REACT_APP_MODE !== "storybook" && option.route && linkTo(option.route);
    }, [option]);

    return (
        <Pressable onPress={handleRedirect} style={styles.secondaryBlock}>
            <View style={styles.block}>
                {option.icon}
                <Text style={styles.blockTitle}>{option.title}</Text>
            </View>

            <ArrowRightIcon color="#090909" />
        </Pressable>
    );
};
