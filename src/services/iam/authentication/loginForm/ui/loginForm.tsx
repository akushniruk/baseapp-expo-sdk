import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { useLoginUserMutation } from "../api/loginApi";
import { Controller, FieldValues, SubmitHandler, UseControllerReturn, useForm } from "react-hook-form";
import { LoginType, LoginResolver, loginSchema } from "../libs/schema";
import { Input, Button } from "../../../../../shared";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link, useLinkTo } from "@react-navigation/native";
import { useAppSelector } from "../../../../../shared/providers/redux/lib/useAppSelector";
import { RootState } from "../../../../../shared/providers/redux/model/store";
import { TwoFactorAuthForm } from "./twoFactorAuthForm";
import { LoginFormProps } from "./interface";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { loginFormStyles } from "./loginForm.styles";

export const LoginForm: FC<LoginFormProps> = ({ redirectToOnLogin = "/Home" }) => {
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = useMemo(() => loginFormStyles(theme), [theme]);

    const schemaInputFields: string[] = loginSchema.keyof()._def.values;
    const require2FA: boolean = useAppSelector((state: RootState) => state.user.require2FA);

    // Should be only numbers, length <= 6
    const [otp, setOtp] = useState<string>("");

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        // Warning: onChange can bring issue with performance
        mode: "onChange",
        resolver: LoginResolver,
    });

    const [loginUser, { isLoading, isSuccess }] = useLoginUserMutation();

    useEffect(() => {
        if (isSuccess) {
            reset({ email: "", password: "" });
            // TODO: handle Storybook
            process.env.REACT_APP_MODE !== "storybook" && linkTo(redirectToOnLogin);
        }
    }, [isSuccess]);

    const buttonDisabled = () => (!watch("email")?.length && !watch("password")?.length) || Object.keys(errors).length;

    const onSubmitHandler: SubmitHandler<LoginType> = (data) => loginUser(data);

    const onSubmitHandlerWith2FA: SubmitHandler<LoginType> = (data) => {
        const dataWithOtp = {
            ...data,
            otp_code: otp,
        };

        loginUser(dataWithOtp);
    };

    const renderForgotPasswordLink = useMemo(
        () => (
            <View style={styles.forgotPasswordLinkWrapper}>
                <Link style={styles.forgotPasswordLink} to={{ screen: "ForgotPassword" }}>
                    {i18n.t("loginFormForgotPasswordLink")}
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
                    placeholder={i18n.t(`loginForm${field.name}Placeholder`)}
                    label={i18n.t(`loginForm${field.name}Placeholder`)}
                    testID={field.name}
                    keyboardType={field.name === "email" ? "email-address" : "default"}
                    secureTextEntry={field.name === "password"}
                />
                {errors && <Text style={styles.error}>{errors[`${field.name}`]?.message as string}</Text>}
            </View>
        ),
        [schemaInputFields, control]
    );

    const renderInputFields = useMemo(() => {
        return schemaInputFields.map((name: string) => {
            return (
                <Controller key={name} control={control} rules={{ required: true }} name={name} render={renderInput} />
            );
        });
    }, [schemaInputFields, control]);

    const renderLoginForm = useMemo(() => {
        return (
            <View>
                {renderInputFields}
                <Button
                    isLoading={isLoading}
                    disabled={!!buttonDisabled()}
                    title={i18n.t("loginFormCreateNewAccountButton")}
                    onPress={handleSubmit(onSubmitHandler as SubmitHandler<FieldValues>)}
                />
                {renderForgotPasswordLink}
            </View>
        );
    }, [isLoading, buttonDisabled, onSubmitHandler]);

    return (
        <>
            {!require2FA ? (
                renderLoginForm
            ) : (
                <TwoFactorAuthForm
                    code={otp}
                    isLoading={isLoading}
                    disabled={false}
                    onChange={setOtp}
                    onSubmit={handleSubmit(onSubmitHandlerWith2FA as SubmitHandler<FieldValues>)}
                />
            )}
        </>
    );
};
