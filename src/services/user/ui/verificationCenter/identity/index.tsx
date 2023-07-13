import React, { useEffect, useMemo, useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { identityFormStyles } from "./identityForm.styles";
import { Button, Input } from "../../../../../shared";

// body:
// identity_number: "+380667756487"
// POST: https://aurora-master.uat.opendax.app/api/v2/barong/resource/identitys
// POST: https://aurora-master.uat.opendax.app/api/v2/barong/resource/identitys/send_code
// VERIFY
// POST: https://aurora-master.uat.opendax.app/api/v2/barong/resource/identitys/verify
// {
//     "identity_number": "+380667756487",
//     "verification_code": "11111111"
// }
export const IdentityForm = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => identityFormStyles(theme), [theme]);

    const [currentStep, setCurrentStep] = useState<number>(0); // [0, 1, 2, 3]
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [nationality, setNationality] = useState<string>("");
    const [idType, setIdType] = useState<string>("");
    const [idNumber, setIdNumber] = useState<string>("");
    const [issueDate, setIssueDate] = useState<string>("");
    const [expireDate, setExpireDate] = useState<string>("");
    const [frontImage, setFrontImage] = useState<string>("");
    const [selfieImage, setSelfieImage] = useState<string>("");

    const renderStep1 = () => {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.title}>Get verified Your ID</Text>
                    <Text style={styles.steps}>Step 1 of 4</Text>

                    <View style={styles.inputWrapper}>
                        <Input
                            onChangeText={setFirstName}
                            value={firstName}
                            placeholder="First name"
                            label="First name"
                            testID="firstName"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            onChangeText={setLastName}
                            value={lastName}
                            placeholder="Last name"
                            label="Last name"
                            testID="lastName"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            onChangeText={setDob}
                            value={dob}
                            placeholder="Date of birth"
                            label="Date of birth"
                            testID="dob"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            onChangeText={setCountry}
                            value={country}
                            placeholder="Country"
                            label="Country"
                            testID="Country"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            onChangeText={setNationality}
                            value={nationality}
                            placeholder="Nationality"
                            label="Nationality"
                            testID="nationality"
                        />
                    </View>
                </View>
            </>
        );
    };

    const renderStep2 = () => {
        return <View style={styles.container}></View>;
    };

    const renderStep3 = () => {
        return <View style={styles.container}></View>;
    };

    const renderStep4 = () => {
        return <View style={styles.container}></View>;
    };

    const renderSteps = () => {
        switch (currentStep) {
            case 0:
                return renderStep1();
            case 1:
                return renderStep2();
            case 2:
                return renderStep3();
            case 3:
                return renderStep4();
            default:
                return null;
        }
    };

    return (
        <KeyboardAvoidingView>
            <View>
                {renderSteps()}
                <View>
                    <Button title="Back" isLoading={false} />
                    <Button title="Next" isLoading={false} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
