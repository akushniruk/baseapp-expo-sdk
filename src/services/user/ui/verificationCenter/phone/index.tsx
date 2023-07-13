import React, { useEffect, useMemo, useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { phoneFormStyles } from "./phoneForm.styles";
import { Button, Input } from "../../../../../shared";

// body:
// phone_number: "+380667756487"
// POST: https://aurora-master.uat.opendax.app/api/v2/barong/resource/phones
// POST: https://aurora-master.uat.opendax.app/api/v2/barong/resource/phones/send_code
// VERIFY
// POST: https://aurora-master.uat.opendax.app/api/v2/barong/resource/phones/verify
// {
//     "phone_number": "+380667756487",
//     "verification_code": "11111111"
// }
export const PhoneForm = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => phoneFormStyles(theme), [theme]);

    const [seconds, setSeconds] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev > 0) return prev - 1;
                else return prev;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!seconds) {
            setIsCodeSent(false);
        }
    }, [seconds]);

    const sendCode = () => {
        setSeconds(60);
        setIsCodeSent(true);
    };

    const verifyCode = () => {
        console.log("verifyCode");
    };

    const renderTimer = () => {
        return (
            <View style={styles.timerWrapper}>
                <Text style={styles.timerText}>
                    0{seconds === 60 ? "1" : "0"}:{seconds === 60 ? "00" : seconds > 9 ? seconds : "0" + seconds}
                </Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <Text style={styles.title}>Get verified your phone number</Text>
                <Text style={styles.steps}>Step 1 of 1</Text>
                <View style={styles.phoneInputWrapper}>
                    <View style={styles.phoneInput}>
                        <Input
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="Phone number"
                            label="Phone number"
                            testID="phone"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        {isCodeSent ? renderTimer() : <Button title="Send code" onPress={sendCode} isLoading={false} />}
                    </View>
                </View>
                <View style={styles.codeInputWrapper}>
                    <Input
                        onChangeText={setCode}
                        value={code}
                        placeholder="Enter code from SMS"
                        label="Enter code from SMS"
                        testID="SMSCode"
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        autoComplete="sms-otp"
                    />
                </View>

                <View style={styles.submitButtonWrapper}>
                    <Button title="Submit" onPress={verifyCode} isLoading={false} disabled={!code} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
