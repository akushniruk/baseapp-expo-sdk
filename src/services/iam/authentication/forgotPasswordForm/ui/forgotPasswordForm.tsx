import React, { FC, useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useForgotPasswordMutation } from "../api/forgotPasswordApi";
import {
    Controller,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import {
    ForgotPasswordType,
    ForgotPasswordResolver,
    forgotPasswordSchema,
} from "../libs/schema";
import Input from "../../../../../shared/ui/input";
import Button from "../../../../../shared/ui/button";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";

const LoginForm: FC = () => {
    const schemaInputFields: string[] =
        forgotPasswordSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: ForgotPasswordResolver,
    });

    const [handleForgotPassword, { isLoading }] = useForgotPasswordMutation();

    const onSubmitHandler: SubmitHandler<ForgotPasswordType> = (data) =>
        handleForgotPassword(data);

    const renderInput = useCallback(
        ({ field }: UseControllerReturn) => (
            <View style={styles.inputWrapper}>
                <Input
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder={field.name}
                    label={field.name}
                    testID={field.name}
                    keyboardType={
                        field.name === "email" ? "email-address" : "default"
                    }
                />
                {errors && (
                    <Text style={styles.error}>
                        {errors[`${field.name}`]?.message}
                    </Text>
                )}
            </View>
        ),
        [schemaInputFields, control]
    );

    const renderLoginForm = useMemo(() => {
        return schemaInputFields.map((name: string) => {
            return (
                <Controller
                    key={name}
                    control={control}
                    rules={{ required: true }}
                    name={name}
                    render={renderInput}
                />
            );
        });
    }, [schemaInputFields, control]);

    return (
        <View>
            {renderLoginForm}
            <Button
                isLoading={isLoading}
                disabled={!errors || isLoading}
                title={i18n.t("forgotPasswordFormSendButton")}
                onPress={handleSubmit(onSubmitHandler)}
            />
            <View style={styles.backToLoginLinkWrapper}>
                <Link style={styles.backToLoginLink} to={{ screen: "Login" }}>
                    Back to login
                </Link>
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 16,
    },
    error: {
        marginTop: 4,
        color: Palette.System["system-red"][60].value,
    },
    backToLoginLinkWrapper: {
        display: "flex",
        alignItems: "flex-start",
    },
    backToLoginLink: {
        marginTop: 16,
        color: Palette.Controls["primary-cta-color"][60].value,
    },
});
