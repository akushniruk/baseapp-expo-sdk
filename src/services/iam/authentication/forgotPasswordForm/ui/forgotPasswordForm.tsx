import React, { FC, useCallback, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { useForgotPasswordMutation } from "../api/forgotPasswordApi";
import { Controller, FieldValues, SubmitHandler, UseControllerReturn, useForm } from "react-hook-form";
import { ForgotPasswordType, ForgotPasswordResolver, forgotPasswordSchema } from "../libs/schema";
import { Input, Button } from "../../../../../shared";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { forgotPasswordFormStyles } from "./forgotPasswordForm.style";

export const ForgotPasswordForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => forgotPasswordFormStyles(theme), [theme]);

    const schemaInputFields: string[] = forgotPasswordSchema.keyof()._def.values;

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

    const [handleForgotPassword, { isLoading, isSuccess }] = useForgotPasswordMutation();

    useEffect(() => {
        if (isSuccess) {
            reset({ email: "" });
        }
    }, [isSuccess]);

    const buttonDisabled = () => !watch("email")?.length || Object.keys(errors).length;

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
                    placeholder={i18n.t(`forgotPasswordForm${field.name}Placeholder`)}
                    label={i18n.t(`forgotPasswordForm${field.name}Placeholder`)}
                    testID={field.name}
                    keyboardType="email-address"
                />
                {errors && errors[`${field.name}`]?.message && (
                    <Text style={styles.error}>{i18n.t(errors[`${field.name}`]?.message as string)}</Text>
                )}
            </View>
        ),
        [schemaInputFields, control]
    );

    const renderLoginForm = useMemo(() => {
        return schemaInputFields.map((name: string) => {
            return (
                <Controller key={name} control={control} rules={{ required: true }} name={name} render={renderInput} />
            );
        });
    }, [schemaInputFields, control]);

    return (
        <View>
            {renderLoginForm}
            <Button
                isLoading={isLoading}
                disabled={!!buttonDisabled()}
                title={i18n.t("forgotPasswordFormSendButton")}
                onPress={handleSubmit(onSubmitHandler as SubmitHandler<FieldValues>)}
            />
        </View>
    );
};
