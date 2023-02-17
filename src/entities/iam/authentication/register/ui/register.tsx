import React, { useCallback } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useRegisterUserMutation } from "../api/registerApi";
import {
    Controller,
    FormProvider,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { object, string, TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

const createRegisterSchema = object({
    email: z
        .string()
        .min(1, "This is required")
        .email({ message: "Must be a valid email" }),
    password: string().min(1, "Content is required"),
    username: string().max(20).min(1, "Category is required").optional(),
    refid: z.string().optional(),
    captcha_response: z.string().optional(),
    // data: z.object().optional(),
});

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(createRegisterSchema),
    });

    const [registerUser, { isLoading, isError, error, isSuccess }] =
        useRegisterUserMutation();

    const onSubmitHandler: SubmitHandler<any> = (data) => {
        console.log("test click");
        registerUser(data);
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

            <Button title="Submit" onPress={handleSubmit(onSubmitHandler)} />
        </View>
    );
};

export default Register;
