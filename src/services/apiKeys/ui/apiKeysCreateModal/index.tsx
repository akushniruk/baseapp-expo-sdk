import React, { FC, useCallback, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import { Warning } from "../../../../assets/system/warning";
import { Button } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { CopyField } from "../../../../shared/ui/copyField";
import { apiKeysCreateModalStyles } from "./apiKeysCreateModal.style";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useAppSelector } from "../../../../shared/providers/redux/lib/useAppSelector";
import { ApiKey } from "../../api/types";
import { IApiKeysCreateModal } from "./interface";
import { Modal } from "../../../../shared/ui/modal";
import BottomSheet from "@gorhom/bottom-sheet";
import i18n from "../../../../shared/libs/i18n/supportedLanguages";

export const ApiKeysCreateModal: FC<IApiKeysCreateModal> = ({
    isOpen,
    buttonTitle,
    isLoading,
    setIsOpen,
}: IApiKeysCreateModal) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysCreateModalStyles(theme), [theme]);

    const apiKeyList: ApiKey[] | null = useAppSelector((state: RootState) => state.apiKey.list);

    const newApiKey: ApiKey | null = apiKeyList?.length ? apiKeyList[apiKeyList.length - 1] : null;

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleCloseModal = useCallback(() => {
        bottomSheetRef?.current?.close();
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <Modal snapPoints={["70%"]} bottomSheetRef={bottomSheetRef} isOpen={isOpen} setIsOpen={setIsOpen}>
            <View style={styles.modalContainer}>
                <Text style={styles.title}>{i18n.t("apiKeysCreateModalNote")}</Text>
                <Text style={styles.subtitle}>{i18n.t("apiKeysCreateModalNoteContent")}</Text>
                <View style={styles.copyFieldContainer}>
                    <CopyField title={i18n.t("apiKeysCreateModalAccessKey")} value={newApiKey?.kid || ""} />
                </View>

                <CopyField title={i18n.t("apiKeysCreateModalSecretKey")} value={newApiKey?.secret || ""} />
                <View style={styles.container}>
                    <View style={styles.warningIcon}>
                        <Warning />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{i18n.t("apiKeysCreateModalSecretKeyInfo")}</Text>
                        <Text style={styles.subtitle}>{i18n.t("apiKeysCreateModalSecretKeyInfoDetails")}</Text>
                    </View>
                </View>
                <Button onPress={handleCloseModal} title={buttonTitle} isLoading={isLoading} />
            </View>
        </Modal>
    );
};
