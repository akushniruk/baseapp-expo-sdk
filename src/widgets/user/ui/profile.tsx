import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View, RefreshControl, Pressable } from "react-native";
import { Profile } from "../../../services/user";
import { ProfileNavigation } from "../../../services/user/ui/profileNavigation/index";
import { ProfileNavigationOption, profileNavigationOptions } from "./config";
import { profileStyles } from "./profile.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { useLogoutMutation } from "../../../services/user/api/logoutApi";
import { useLinkTo } from "@react-navigation/native";

export const ProfileWidget: FC = () => {
    const linkTo = useLinkTo();

    const [logout, { isLoading, isSuccess }] = useLogoutMutation();
    const { theme } = useThemeContext();
    const styles = useMemo(() => profileStyles(theme), [theme]);

    // const [refreshing, setRefreshing] = useState(false);

    // const onRefresh = useCallback(() => {
    //     setRefreshing(true);
    //     setTimeout(() => {
    //         setRefreshing(false);
    //     }, 2000);
    // }, []);

    useEffect(() => {
        if (isSuccess) {
            linkTo("/Home");
        }
    }, [isSuccess]);

    const renderList = (item: ProfileNavigationOption) => {
        return (
            <View style={{ paddingBottom: 12 }}>
                <ProfileNavigation option={item} />
            </View>
        );
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <View onStartShouldSetResponder={() => true}>
                    <Profile />
                    <View style={{ marginTop: 48 }}>{profileNavigationOptions(styles.icon.color).map(renderList)}</View>
                </View>
                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
};
