import { object, string, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = object({
    email: z
        .string()
        .min(1, "This is required")
        .email({ message: "Must be a valid email" }),
    password: string().min(1, "Content is required"),
    username: string().max(20).min(1, "Category is required").optional(),
    refid: z.string().optional(),
    captcha_response: z.string().optional(),
});

export const RegisterResolver = zodResolver(registerSchema);

export type RegisterType = TypeOf<typeof registerSchema>;
