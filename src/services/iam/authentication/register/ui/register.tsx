import React, { FC, useCallback, useMemo } from "react";
import { View } from "react-native";
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

const Register: FC = () => {
    const inputFields: string[] = registerSchema.keyof()._def.values;
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: RegisterResolver,
    });

    const [registerUser, { isLoading, isError, error, isSuccess }] =
        useRegisterUserMutation();

    const onSubmitHandler: SubmitHandler<RegisterType> = (data) => {
        const formData = new FormData();

        formData.append("data", JSON.stringify(data));
        registerUser(formData);
    };

    console.log(errors);

    const renderInput = useCallback(
        ({ field }: UseControllerReturn) => (
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
        ),
        [inputFields, control]
    );

    const renderRegisterForm = useMemo(() => {
        return inputFields.map((name: string) => {
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
    }, [inputFields, control]);

    return (
        <View>
            {renderRegisterForm}
            {/* {errors.email && <Text>This is required. Email</Text>} */}

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
