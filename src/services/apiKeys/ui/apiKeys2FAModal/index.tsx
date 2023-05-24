import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { apiKeys2FAModalStyles } from "./apiKeys2FAModal.styles";
import { IApiKeys2FAModal } from "./interface";
import { OTPInput, Button } from "../../../../shared";
import BottomSheet from "@gorhom/bottom-sheet";
import { Modal } from "../../../../shared/ui/modal";

export const ApiKeys2FAModal: FC<IApiKeys2FAModal> = ({ isOpen, buttonTitle, isLoading, setIsOpen, sendRequest }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeys2FAModalStyles(theme), [theme]);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const [otp, setOtp] = useState<string>("");

    const handleSendRequest = () => {
        sendRequest();
        setOtp("");
        bottomSheetRef?.current?.forceClose();
        setIsOpen(false);
    };

    return (
        <Modal
            snapPoints={["40%", "60%"]}
            bottomSheetRef={bottomSheetRef}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            resetValue={() => setOtp("")}
        >
            <View style={styles.container}>
                <Text style={styles.label}>Enter 2fa code from the Google Authenticator app</Text>
                <OTPInput code={otp} setCode={setOtp} maximumLength={6} emptyInputSymbol="*" />

                <Button onPress={handleSendRequest} title={buttonTitle} isLoading={isLoading} />
            </View>
        </Modal>
    );
};
