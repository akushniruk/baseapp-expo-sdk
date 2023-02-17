import React, { FC, useCallback } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useRegisterUserMutation } from "../api/registerApi";
import {
    Controller,
    SubmitHandler,
    useForm,
    FieldValues,
} from "react-hook-form";
import { CreateRegisterType, CreateRegisterResolver } from "../lib/schema";

const Register: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: CreateRegisterResolver,
    });

    console.log(CreateRegisterType);

    const [registerUser, { isLoading, isError, error, isSuccess }] =
        useRegisterUserMutation();

    const onSubmitHandler: SubmitHandler<CreateRegisterType> = (data) => {
        const formData = new FormData();

        formData.append("data", JSON.stringify(data));
        registerUser(formData);
    };

    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="email"
                    />
                )}
                name="email"
            />
            {errors.email && <Text>This is required. Email</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="password"
                    />
                )}
                name="password"
            />
            {errors.password && <Text>This is required. passworf</Text>}

            {/* @ts-ignore */}
            <Button title="Submit" onPress={handleSubmit(onSubmitHandler)} />
        </View>
    );
};

export default Register;
