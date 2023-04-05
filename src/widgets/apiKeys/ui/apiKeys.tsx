import React, { FC, useCallback, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import { ApiKeysTable } from "../../../services/apiKeys/ui/apiKeysTable/index";
import { ApiKeysActivate2FA } from "../../../services/apiKeys/ui/apiKeysActivate2FA/index";
import { ApiKeys2FAModal } from "../../../services/apiKeys/ui/apiKeys2FAModal/index";
import { ApiKeysCreateModal } from "../../../services/apiKeys/ui/apiKeysCreateModal/index";

export const ApiKeysWidget: FC = () => {
    // TODO: add selectedAPIKEY state
    const [isOpen2FAModal, setIsOpen2FAModal] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const sendCreateRequest = useCallback(() => {
        setIsOpen2FAModal(true);
    }, []);

    const sendUpdateRequest = useCallback((kid: string, state: string) => {
        console.log(kid, state);
    }, []);

    const sendDeleteRequest = useCallback((kid: string) => {
        console.log(kid);
    }, []);

    const sendRequest = useCallback(() => {
        console.log("test");
        setIsOpen2FAModal(false);
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
                <ApiKeysActivate2FA />
                <ApiKeysTable
                    createRequest={sendCreateRequest}
                    updateRequest={sendUpdateRequest}
                    deleteRequest={sendDeleteRequest}
                />
                <ApiKeys2FAModal
                    isOpen={isOpen2FAModal}
                    buttonTitle="create"
                    isLoading={false}
                    sendRequest={sendRequest}
                />
                <ApiKeysCreateModal />
            </ScrollView>
        </View>
    );
};
