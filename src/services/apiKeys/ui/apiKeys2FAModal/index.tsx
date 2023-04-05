import React, { FC, useCallback, useMemo, useState } from "react";
import { View, Text, Modal } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { apiKeys2FAModalStyles } from "./apiKeys2FAModal.styles";
import { ApiKeys2FAModalProps } from "./interface";
import { OTPInput, Button } from "../../../../shared";

export const ApiKeys2FAModal: FC<ApiKeys2FAModalProps> = ({
    isOpen,
    buttonTitle,
    isLoading,
    sendRequest,
}) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeys2FAModalStyles(theme), [theme]);

    // Should be only numbers, length <= 6
    const [otp, setOtp] = useState<string>("");

    const handleSendRequest = useCallback(() => {
        sendRequest();
    }, [otp]);

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <Text style={styles.label}>
                Enter 2fa code from the Google Authenticator app
            </Text>
            <OTPInput
                code={otp}
                setCode={setOtp}
                maximumLength={6}
                emptyInputSymbol="*"
            />

            <Button
                onPress={handleSendRequest}
                title={buttonTitle}
                isLoading={isLoading}
            />
        </Modal>
    );
};
