import React, { FC, useCallback, useState } from "react";
import {
    StyleSheet,
    ScrollView,
    Text,
    SafeAreaView,
    RefreshControl,
} from "react-native";
import { Profile } from "../../../services/user";

export const ProfileWidget: FC = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    // TODO:
    // 1.User button with: image, user nickname or UID, verification and arrow for going in
    // 2.list of options.
    // 2.1. Referal
    // 2.2. Security
    // 2.3 Clear cache.
    // 2.4. Share app

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Profile />
                <Text>Referral</Text>
                <Text>Security</Text>
                <Text>Clear Cache 40Mb</Text>
                <Text>Share app</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});
