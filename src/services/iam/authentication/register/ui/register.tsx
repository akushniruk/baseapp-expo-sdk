import React, { FC, useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRegisterUserMutation } from "../api/registerApi";
import {
    Controller,
    SubmitHandler,
    UseControllerReturn,
    useForm,
} from "react-hook-form";
import { RegisterType, RegisterResolver, registerSchema } from "../lib/schema";
import Input from "../../../../../shared/ui/input";
import Button from "../../../../../shared/ui/button";
import { Colors } from "../../../../../shared/styles/themes/defaultColors";

const Register: FC = () => {
    const schemaInputFields: string[] = registerSchema.keyof()._def.values;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: RegisterResolver,
    });

    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const onSubmitHandler: SubmitHandler<RegisterType> = (data) => {
        const formData = new FormData();

        formData.append("data", JSON.stringify(data));
        registerUser(formData);
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
                    keyboardType={
                        field.name === "email" ? "email-address" : "default"
                    }
                    secureTextEntry={field.name === "password"}
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
                disabled={!errors || isLoading}
                title="Submit"
                onPress={handleSubmit(onSubmitHandler)}
            />
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 16,
    },
    error: {
        marginTop: 4,
        color: Colors["system-red-60"],
    },
});
