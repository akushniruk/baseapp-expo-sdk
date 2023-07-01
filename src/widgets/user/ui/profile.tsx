import React, { FC, useCallback, useMemo, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import { Profile } from "../../../services/user";
import { ProfileNavigation } from "../../../services/user/ui/profileNavigation/index";
import { ProfileNavigationOption, profileNavigationOptions } from "./config";
import { profileStyles } from "./profile.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";

export const ProfileWidget: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => profileStyles(theme), [theme]);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderList = (item: ProfileNavigationOption) => {
        return (
            <View style={{ paddingBottom: 12 }}>
                <ProfileNavigation option={item} />
            </View>
        );
    };

    return (
        <View style={{ height: "100%" }}>
            <ScrollView
                style={{ height: "100%" }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View onStartShouldSetResponder={() => true}>
                    <Profile />
                    <View style={{ marginTop: 48 }}>{profileNavigationOptions(styles.icon.color).map(renderList)}</View>
                </View>
            </ScrollView>
        </View>
    );
};
