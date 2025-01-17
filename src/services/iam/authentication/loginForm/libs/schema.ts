import { object, string, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = object({
    email: z
        .string()
        .min(1, "Email is required")
        .email({ message: "Must be a valid email" }),
    password: string().min(1, "Password is required"),
});

export const LoginResolver = zodResolver(loginSchema);

export type LoginType = TypeOf<typeof loginSchema>;
