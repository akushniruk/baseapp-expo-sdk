import React, { FC, useCallback, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { apiKeysCreateModalStyles } from "./apiKeysCreateModal.styles";
import { ApiKeysCreateModalProps } from "./interface";
import { OTPInput, Button } from "../../../../shared";

// endpoint Request URL: https://yellowsoftwareexchange.uat.opendax.app/api/v2/barong/resource/api_keys
// send
// {
//     "totp_code": "689508",
//     "algorithm": "HS256"
// }
// response
// {
//     "kid": "a36d3e949608c426",
//     "algorithm": "HS256",
//     "scope": [],
//     "state": "active",
//     "secret": "15269e4b0674d5a25e2e2d0b86000a74",
//     "created_at": "2023-04-04T11:16:44Z",
//     "updated_at": "2023-04-04T11:16:44Z"
// }

// disable Patch
//https://yellowsoftwareexchange.uat.opendax.app/api/v2/barong/resource/api_keys/a36d3e949608c426
//
// {
//     "totp_code": "403585",
//     "state": "disabled"
// }

// response
// {
//     "kid": "a36d3e949608c426",
//     "algorithm": "HS256",
//     "scope": [],
//     "state": "disabled",
//     "created_at": "2023-04-04T11:16:44Z",
//     "updated_at": "2023-04-04T11:19:52Z"
// }

export const ApiKeysCreateModal: FC<ApiKeysCreateModalProps> = ({
    title,
    isLoading,
    sendRequest,
}) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysCreateModalStyles(theme), [theme]);

    // Should be only numbers, length <= 6
    const [otp, setOtp] = useState<string>("");

    const handleSendRequest = useCallback(() => {
        sendRequest();
    }, [otp]);

    return (
        <View>
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
                title={title}
                isLoading={isLoading}
            />
        </View>
    );
};
