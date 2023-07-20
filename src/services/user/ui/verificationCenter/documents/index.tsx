import React, { useMemo, useState } from "react";
import { View, Text, KeyboardAvoidingView, Image } from "react-native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { documentsFormStyles } from "./documentsForm.styles";
import { Button, Input } from "../../../../../shared";
import * as ImagePicker from "expo-image-picker";

const ID_TYPES = ["Passport", "ID card", "Driver license"];

// https://aurora-master.uat.opendax.app/api/v2/barong/resource/documents
// Request Method:
// POST
// doc_expire: 12/12/2032
// doc_issue: 12/12/2014
// doc_type: Passport
// doc_number: 123123123123
// identificator: 413be5e6bffa27fa4f7dfa5f58994e34
// doc_category: front_side
// upload[]: (binary)
// Request URL:
// https://aurora-master.uat.opendax.app/api/v2/barong/resource/documents
// Request Method:
// POST
// doc_expire: 12/12/2032
// doc_issue: 12/12/2014
// doc_type: Passport
// doc_number: 123123123123
// identificator: 413be5e6bffa27fa4f7dfa5f58994e34
// doc_category: selfie
// upload[]: (binary)

export const DocumentsForm = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => documentsFormStyles(theme), [theme]);

    const [currentStep, setCurrentStep] = useState<number>(0);
    const [idType, setIdType] = useState<string>("");
    const [idNumber, setIdNumber] = useState<string>("");
    const [issueDate, setIssueDate] = useState<string>("");
    const [expireDate, setExpireDate] = useState<string>("");
    const [frontImage, setFrontImage] = useState(null);
    const [selfieImage, setSelfieImage] = useState("");

    // TODO: move to helpers
    const randomSecureHex = (length: number) => {
        const maxlen = 8;
        const min = Math.pow(16, Math.min(length, maxlen) - 1);
        const max = Math.pow(16, Math.min(length, maxlen)) - 1;
        const numberResult = Math.floor(Math.random() * (max - min + 1)) + min;
        let result = numberResult.toString(16);

        while (result.length < length) {
            result = result + randomSecureHex(length - maxlen);
        }

        return result;
    };

    // TODO: move to helpers
    const createFormData = (docCategory: string, upload: File[], identification: string) => {
        const request = new FormData();

        if (expireDate) {
            request.append("doc_expire", expireDate);
        }

        request.append("doc_issue", issueDate);
        request.append("doc_type", idType);
        request.append("doc_number", idNumber);
        request.append("identificator", identification);
        request.append("doc_category", docCategory);
        request.append("upload[]", upload[0]);

        return request;
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            // @ts-ignore
            setFrontImage(result.assets[0].uri);
        }
    };

    const renderStep1 = () => {
        return (
            <View style={styles.documentsContainer}>
                <View style={styles.inputWrapper}>
                    <Input
                        onChangeText={setIdType}
                        value={idType}
                        placeholder="Select ID type"
                        label="ID type"
                        testID="idType"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Input
                        onChangeText={setIdNumber}
                        value={idNumber}
                        placeholder="ID number"
                        label="ID number"
                        testID="idNumber"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Input
                        onChangeText={setIssueDate}
                        value={issueDate}
                        placeholder="Issue date"
                        label="Issue date"
                        testID="issueDate"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Input
                        onChangeText={setExpireDate}
                        value={expireDate}
                        placeholder="Expire date"
                        label="Expire date"
                        testID="expireDate"
                    />
                </View>
            </View>
        );
    };

    const renderStep2 = () => {
        return (
            <View style={styles.uploadContainer}>
                <Button title="Pick an image from camera roll" onPress={pickImage} isLoading={false} />
                {frontImage && <Image source={{ uri: frontImage }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    };

    const renderStep3 = () => {
        return (
            <View style={styles.uploadContainer}>
                <Input
                    onChangeText={setSelfieImage}
                    value={selfieImage}
                    placeholder="Selfie image"
                    label="Selfie image"
                    testID="selfieImage"
                />
            </View>
        );
    };

    const renderSteps = () => {
        switch (currentStep) {
            case 0:
                return renderStep1();
            case 1:
                return renderStep2();
            case 2:
                return renderStep3();
            default:
                return null;
        }
    };

    const verifyDocuments = () => {
        console.log("verifyDocuments");
    };

    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Documents Verification</Text>
                    <Text style={styles.steps}>Step {currentStep + 1} of 3</Text>
                </View>
                {renderSteps()}
                <View style={currentStep !== 0 ? styles.buttonsWrapper : styles.buttonsWrapperTwo}>
                    {/* TODO: refactor */}
                    {currentStep !== 0 ? (
                        <View style={styles.button}>
                            <Button onPress={() => setCurrentStep(currentStep - 1)} title="Back" isLoading={false} />
                        </View>
                    ) : null}
                    {currentStep !== 2 ? (
                        <View style={styles.button}>
                            <Button onPress={() => setCurrentStep(currentStep + 1)} title="Next" isLoading={false} />
                        </View>
                    ) : (
                        <View style={styles.button}>
                            <Button onPress={verifyDocuments} title="Submit" isLoading={false} />
                        </View>
                    )}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
