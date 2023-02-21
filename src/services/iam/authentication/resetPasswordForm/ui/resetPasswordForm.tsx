import React, { FC, useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLoginUserMutation } from "../api/resetPasswordApi";
import {
    Controller,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import {
    ResetPasswordType,
    ResetPasswordResolver,
    resetPasswordSchema,
} from "../libs/schema";
import Input from "../../../../../shared/ui/input";
import Button from "../../../../../shared/ui/button";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";

const ResetPasswordForm: FC = () => {
    const schemaInputFields: string[] = resetPasswordSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: ResetPasswordResolver,
    });

    const [loginUser, { isLoading }] = useLoginUserMutation();

    const onSubmitHandler: SubmitHandler<ResetPasswordType> = (data) =>
        loginUser(data);

    const renderForgotPasswordLink = useMemo(
        () => (
            <View style={styles.forgotPasswordLinkWrapper}>
                <Link
                    style={styles.forgotPasswordLink}
                    to={{ screen: "ForgotPassword" }}
                >
                    Forgot password?
                </Link>
            </View>
        ),
        []
    );

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
                    secureTextEntry={field.name === "password"}
                />
                {field.name === "password" && renderForgotPasswordLink}
                {errors && (
                    <Text style={styles.error}>
                        {errors[`${field.name}`]?.message}
                    </Text>
                )}
            </View>
        ),
        [schemaInputFields, control]
    );

    const ResetPasswordForm = useMemo(() => {
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
            {ResetPasswordForm}
            <Button
                isLoading={isLoading}
                disabled={!errors || isLoading}
                title={i18n.t("resetPasswordFormCreateNewAccountButton")}
                onPress={handleSubmit(onSubmitHandler)}
            />
            <View style={styles.registerLinkWrapper}>
                <Link style={styles.registerLink} to={{ screen: "Register" }}>
                    Create an account
                </Link>
            </View>
        </View>
    );
};

export default ResetPasswordForm;

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 16,
    },
    error: {
        marginTop: 4,
        color: Palette.System["system-red"][60].value,
    },
    forgotPasswordLinkWrapper: {
        display: "flex",
        alignItems: "flex-end",
    },
    forgotPasswordLink: {
        marginTop: 4,
    },
    registerLinkWrapper: {
        display: "flex",
        alignItems: "flex-start",
    },
    registerLink: {
        marginTop: 16,
        color: Palette.Controls["primary-cta-color"][60].value,
    },
});
