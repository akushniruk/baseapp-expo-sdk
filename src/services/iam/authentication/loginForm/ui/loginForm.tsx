import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLoginUserMutation } from "../api/loginApi";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import { LoginType, LoginResolver, loginSchema } from "../libs/schema";
import Input from "../../../../../shared/ui/input";
import Button from "../../../../../shared/ui/button";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import { useAppSelector } from "../../../../../shared/providers/redux/lib/useAppSelector";
import { RootState } from "../../../../../shared/providers/redux/model/store";
import TwoFactorAuthForm from "./twoFactorAuthForm";

const LoginForm: FC = () => {
    const schemaInputFields: string[] = loginSchema.keyof()._def.values;
    const require2FA: boolean = useAppSelector(
        (state: RootState) => state.user.require2FA
    );

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
        }
    }, [isSuccess]);

    const buttonDisabled = () =>
        (!watch("email")?.length && !watch("password")?.length) ||
        Object.keys(errors).length;

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
                        {errors[`${field.name}`]?.message as string}
                    </Text>
                )}
            </View>
        ),
        [schemaInputFields, control]
    );

    const renderInputFields = useMemo(() => {
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

    const renderLoginForm = useMemo(() => {
        return (
            <View>
                {renderInputFields}
                <Button
                    isLoading={isLoading}
                    disabled={buttonDisabled()}
                    title={i18n.t("loginFormCreateNewAccountButton")}
                    onPress={handleSubmit(
                        onSubmitHandler as SubmitHandler<FieldValues>
                    )}
                />
                <View style={styles.registerLinkWrapper}>
                    <Link
                        style={styles.registerLink}
                        to={{ screen: "Register" }}
                    >
                        Create an account
                    </Link>
                </View>
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
                    onSubmit={handleSubmit(
                        onSubmitHandlerWith2FA as SubmitHandler<FieldValues>
                    )}
                />
            )}
        </>
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
