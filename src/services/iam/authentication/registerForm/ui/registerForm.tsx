import React, { FC, useCallback, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { useRegisterUserMutation } from "../api/registerApi";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import { RegisterType, RegisterResolver, registerSchema } from "../libs/schema";
import { Input, Button } from "../../../../../shared";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { registerFormStyles } from "./registerForm.styles";

export const RegisterForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => registerFormStyles(theme), [theme]);

    const schemaInputFields: string[] = registerSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: RegisterResolver,
    });

    const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

    useEffect(() => {
        if (isSuccess) {
            reset({
                email: "",
                password: "",
                username: "",
                refid: "",
                captcha_response: "",
            });
            // TODO: redirect to the verify email
        }
    }, [isSuccess]);

    const buttonDisabled = () =>
        (!watch("email")?.length && !watch("password")?.length) ||
        Object.keys(errors).length;

    const onSubmitHandler: SubmitHandler<RegisterType> = (data) =>
        registerUser(data);

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
                {errors && (
                    <Text style={styles.error}>
                        {errors[`${field.name}`]?.message as string}
                    </Text>
                )}
            </View>
        ),
        [schemaInputFields, control]
    );

    const renderRegisterForm = useMemo(() => {
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
            {renderRegisterForm}
            <Button
                isLoading={isLoading}
                disabled={!!buttonDisabled()}
                title={i18n.t("registerFormCreateNewAccountButton")}
                onPress={handleSubmit(
                    onSubmitHandler as SubmitHandler<FieldValues>
                )}
            />
            <View style={styles.backToLoginLinkWrapper}>
                <Link style={styles.backToLoginLink} to={{ screen: "Login" }}>
                    {i18n.t("registerFormBackToLogin")}
                </Link>
            </View>
        </View>
    );
};
