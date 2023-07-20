import React, { useEffect, useMemo, useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { identityFormStyles } from "./identityForm.styles";
import { Button, Input } from "../../../../../shared";

// POST
// https://aurora-master.uat.opendax.app/api/v2/barong/resource/profiles
// {
//     "first_name": "Andrii",
//     "last_name": "Kushniruk",
//     "dob": "02/07/1997",
//     "address": "Crakow",
//     "postcode": "01001",
//     "city": "Crakow",
//     "country": "PL",
//     "confirm": true
//   }
export const IdentityForm = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => identityFormStyles(theme), [theme]);

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [nationality, setNationality] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const renderVerification = () => {
        return (
            <>
                <View style={styles.identityContainer}>
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

    const verifyProfile = () => {
        console.log("Submit Profile");
    };

    return (
        <KeyboardAvoidingView>
            <ScrollView style={{ height: "100%" }}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>Get verified Your Profile</Text>
                        <Text style={styles.steps}>Step 1 of 1</Text>
                    </View>
                    {renderVerification()}
                    <View style={styles.submitButtonWrapper}>
                        <Button onPress={verifyProfile} title="Submit" isLoading={false} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
