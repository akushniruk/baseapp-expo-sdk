import React, { FC, useCallback, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";

export const ApiKeysWidget: FC = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

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
                <Text>test</Text>
            </ScrollView>
        </View>
    );
};
