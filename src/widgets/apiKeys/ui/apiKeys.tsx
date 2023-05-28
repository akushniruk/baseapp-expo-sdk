import React, { FC, useCallback, useState } from "react";
import { ScrollView, View, RefreshControl, Text } from "react-native";
import { ApiKeysTable } from "../../../services/apiKeys/ui/apiKeysTable/index";
import { ApiKeysActivate2FA } from "../../../services/apiKeys/ui/apiKeysActivate2FA/index";
import { ApiKeys2FAModal } from "../../../services/apiKeys/ui/apiKeys2FAModal/index";
import { ApiKeysCreateModal } from "../../../services/apiKeys/ui/apiKeysCreateModal/index";
import { useAppSelector } from "../../../shared";
import { User } from "../../../services/user";
import { RootState } from "../../../shared/providers/redux/model/store";
import {
    useCreateApiKeyMutation,
    useUpdateApiKeyMutation,
    useDeleteApiKeyMutation,
} from "../../../services/apiKeys/api/apiKeyApi";

type ISelectedApiKey = {
    kid: string;
    state: "active" | "disabled" | "";
};

export const ApiKeysWidget: FC = () => {
    const [createApiKey, { isLoading, isSuccess }] = useCreateApiKeyMutation();
    const [updateApiKey] = useUpdateApiKeyMutation();
    const [deleteApiKey] = useDeleteApiKeyMutation();

    const [isOpen2FAModal, setIsOpen2FAModal] = useState(false);
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
    const [action, setAction] = useState<"" | "create" | "update" | "delete">("create");
    const [selectedApiKey, setSelectedApiKey] = useState<ISelectedApiKey>({
        kid: "",
        state: "",
    });
    const [refreshing, setRefreshing] = useState(false);
    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const sendCreateRequest = useCallback(() => {
        setIsOpen2FAModal(true);
        setAction("create");
    }, [setAction, setIsOpen2FAModal]);

    const sendUpdateRequest = useCallback(
        (kid: string, state: "active" | "disabled") => {
            setSelectedApiKey({ kid, state });
            setAction("update");
            setIsOpen2FAModal(true);
        },
        [setAction, setSelectedApiKey, setIsOpen2FAModal]
    );

    const sendDeleteRequest = useCallback(
        (kid: string) => {
            setSelectedApiKey({ kid, state: "" });
            setAction("delete");
            setIsOpen2FAModal(true);
        },
        [setAction, setSelectedApiKey, setIsOpen2FAModal]
    );

    const sendRequest = useCallback(
        (totp_code?: string) => {
            const { kid, state } = selectedApiKey;

            switch (action) {
                case "create":
                    setIsOpen2FAModal(false);
                    totp_code && createApiKey({ algorithm: "HS256", totp_code });
                    setIsOpenCreateModal(true);
                    break;
                case "update":
                    setIsOpen2FAModal(false);
                    totp_code &&
                        kid &&
                        state &&
                        updateApiKey({ kid, totp_code, state: state === "active" ? "disabled" : "active" });

                    break;
                case "delete":
                    setIsOpen2FAModal(false);
                    totp_code && kid && deleteApiKey({ totp_code, kid });
                    break;
                default:
                    break;
            }
        },
        [action, selectedApiKey]
    );

    return (
        <View style={{ height: "100%" }}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {!profile?.otp ? <ApiKeysActivate2FA /> : null}
                {profile && profile?.otp ? (
                    <ApiKeysTable
                        createRequest={sendCreateRequest}
                        updateRequest={sendUpdateRequest}
                        deleteRequest={sendDeleteRequest}
                    />
                ) : null}
            </ScrollView>
            <ApiKeys2FAModal
                isOpen={isOpen2FAModal}
                setIsOpen={setIsOpen2FAModal}
                buttonTitle={action}
                isLoading={false}
                sendRequest={sendRequest}
            />
            <ApiKeysCreateModal
                isOpen={isOpenCreateModal}
                setIsOpen={setIsOpenCreateModal}
                buttonTitle="Close"
                isLoading={false}
            />
        </View>
    );
};
