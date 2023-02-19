import { object, string, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = object({
    username: string().max(20).optional(),
    email: z
        .string()
        .min(1, "Email is required")
        .email({ message: "Must be a valid email" }),
    password: string().min(1, "Password is required"),
    refid: z.string().optional(),
    captcha_response: z.string().optional(),
});

export const RegisterResolver = zodResolver(registerSchema);

export type RegisterType = TypeOf<typeof registerSchema>;
