import React, { FC, useCallback, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import { Profile } from "../../../services/user";
import { ProfileNavigation } from "../../../services/user/ui/profileNavigation/index";
import { ProfileNavigationOption, profileNavigationOptions } from "./config";
export const ProfileWidget: FC = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderList = (item: ProfileNavigationOption) => {
        return <ProfileNavigation option={item} />;
    };

    return (
        <View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Profile />
                {profileNavigationOptions.map(renderList)}
            </ScrollView>
        </View>
    );
};
