import React, { FC, useCallback, useMemo, useState } from "react";
import { View, Text, Modal } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { apiKeys2FAModalStyles } from "./apiKeys2FAModal.styles";
import { ApiKeys2FAModalProps } from "./interface";
import { OTPInput, Button } from "../../../../shared";
import { SafeAreaView } from "react-native-safe-area-context";

export const ApiKeys2FAModal: FC<ApiKeys2FAModalProps> = ({ isOpen, buttonTitle, isLoading, sendRequest }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeys2FAModalStyles(theme), [theme]);

    const [otp, setOtp] = useState<string>("");

    const handleSendRequest = () => {
        sendRequest();
    };

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.container}>
                <Text style={styles.label}>Enter 2fa code from the Google Authenticator app</Text>
                <OTPInput code={otp} setCode={setOtp} maximumLength={6} emptyInputSymbol="*" />

                <Button onPress={handleSendRequest} title={buttonTitle} isLoading={isLoading} />
            </View>
        </Modal>
    );
};
