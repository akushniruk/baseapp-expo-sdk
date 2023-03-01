import React, { FC, useCallback, useEffect, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useForgotPasswordMutation } from "../api/forgotPasswordApi";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import {
    ForgotPasswordType,
    ForgotPasswordResolver,
    forgotPasswordSchema,
} from "../libs/schema";
import { Input, Button } from "../../../../../shared";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";

export const ForgotPasswordForm: FC = () => {
    const schemaInputFields: string[] =
        forgotPasswordSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        // Warning: onChange can bring issue with performance
        mode: "onChange",
        resolver: ForgotPasswordResolver,
    });

    const [handleForgotPassword, { isLoading, isSuccess }] =
        useForgotPasswordMutation();

    useEffect(() => {
        if (isSuccess) {
            reset({ email: "" });
        }
    }, [isSuccess]);

    const buttonDisabled = () =>
        !watch("email")?.length || Object.keys(errors).length;

    const onSubmitHandler: SubmitHandler<ForgotPasswordType> = (data) => {
        handleForgotPassword(data);
    };

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
                    keyboardType="email-address"
                />
                {errors && errors[`${field.name}`]?.message && (
                    <Text style={styles.error}>
                        {i18n.t(errors[`${field.name}`]?.message as string)}
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
                disabled={buttonDisabled()}
                title={i18n.t("forgotPasswordFormSendButton")}
                onPress={handleSubmit(
                    onSubmitHandler as SubmitHandler<FieldValues>
                )}
            />
            <View style={styles.backToLoginLinkWrapper}>
                <Link style={styles.backToLoginLink} to={{ screen: "Login" }}>
                    {i18n.t("forgotPasswordFormBackToLoginButton")}
                </Link>
            </View>
        </View>
    );
};

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
        alignItems: "center",
    },
    backToLoginLink: {
        marginTop: 16,
        fontWeight: "bold",
        color: Palette["text-color"][100].value,
    },
});
