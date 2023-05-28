import React, { FC, useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import { useChangePasswordMutation } from "../api/changePasswordApi";
import { Controller, FieldValues, SubmitHandler, UseControllerReturn, useForm } from "react-hook-form";
import { ChangePasswordType, ChangePasswordResolver, changePasswordSchema } from "../libs/schema";
import { Input, Button } from "../../../../../shared";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { changePasswordFormStyles } from "./changePasswordForm.styles";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";

export const ChangePasswordForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => changePasswordFormStyles(theme), [theme]);

    const schemaInputFields: string[] = changePasswordSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: ChangePasswordResolver,
    });

    const [changePassword, { isLoading }] = useChangePasswordMutation();

    const onSubmitHandler: SubmitHandler<ChangePasswordType> = (data) => {
        changePassword(data);
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
                {errors && <Text style={styles.error}>{errors[`${field.name}`]?.message as string}</Text>}
            </View>
        ),
        [schemaInputFields, control]
    );

    const ChangePasswordForm = useMemo(() => {
        return schemaInputFields.map((name: string) => {
            return (
                <Controller key={name} control={control} rules={{ required: true }} name={name} render={renderInput} />
            );
        });
    }, [schemaInputFields, control]);

    return (
        <View>
            {ChangePasswordForm}
            <Button
                isLoading={isLoading}
                disabled={!errors || isLoading}
                title={i18n.t("changePasswordFormButton")}
                onPress={handleSubmit(onSubmitHandler as SubmitHandler<FieldValues>)}
            />
        </View>
    );
};
