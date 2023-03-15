import React, { FC, useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import { useResetPasswordMutation } from "../api/resetPasswordApi";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import {
    ResetPasswordType,
    ResetPasswordResolver,
    resetPasswordSchema,
} from "../libs/schema";
import { Input, Button } from "../../../../../shared";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import { resetPasswordFormStyles } from "./resetPasswordForm.styles";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";

export const ResetPasswordForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => resetPasswordFormStyles(theme), [theme]);

    const schemaInputFields: string[] = resetPasswordSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: ResetPasswordResolver,
    });

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const onSubmitHandler: SubmitHandler<ResetPasswordType> = (data) => {
        const dataWithResetToken = {
            ...data,
            reset_password_token: "changeme",
        };
        resetPassword(dataWithResetToken);
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
                    keyboardType="default"
                    secureTextEntry={true}
                />
                {errors && (
                    <Text style={styles.error}>
                        {errors[`${field.name}`]?.message as string}
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
                title={i18n.t("resetPasswordFormButton")}
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
