import React, { FC, useCallback, useState } from "react";
import { ScrollView, View, RefreshControl } from "react-native";
import { ApiKeysTable } from "../../../services/apiKeys/ui/apiKeysTable/index";
import { ApiKeysActivate2FA } from "../../../services/apiKeys/ui/apiKeysActivate2FA/index";
import { ApiKeys2FAModal } from "../../../services/apiKeys/ui/apiKeys2FAModal/index";
import { ApiKeysCreateModal } from "../../../services/apiKeys/ui/apiKeysCreateModal/index";
import { useAppSelector } from "../../../shared";
import { User } from "../../../services/user";
import { RootState } from "../../../shared/providers/redux/model/store";

export const ApiKeysWidget: FC = () => {
    const [isOpen2FAModal, setIsOpen2FAModal] = useState(false);
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

    const [refreshing, setRefreshing] = useState(false);

    const profile: User | null = useAppSelector(
        (state: RootState) => state.user.profile
    );

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
        setIsOpen2FAModal(false);
        setIsOpenCreateModal(true);

        // TODO: handle delete, create, update
    }, []);

    const handleClose = useCallback(() => {
        setIsOpenCreateModal(false);
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
                {!profile?.otp ? <ApiKeysActivate2FA /> : null}
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
                <ApiKeysCreateModal
                    isOpen={isOpenCreateModal}
                    buttonTitle="close"
                    isLoading={false}
                    handleClose={handleClose}
                />
            </ScrollView>
        </View>
    );
};
