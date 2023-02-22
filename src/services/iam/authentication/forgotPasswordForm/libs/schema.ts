import { object, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const forgotPasswordSchema = object({
    email: z
        .string()
        .min(1, "emailFieldErrorMin")
        .email({ message: "emailFieldError" }),
});

export const ForgotPasswordResolver = zodResolver(forgotPasswordSchema);

export type ForgotPasswordType = TypeOf<typeof forgotPasswordSchema>;
