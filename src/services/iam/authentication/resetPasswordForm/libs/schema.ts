import { object, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const resetPasswordSchema = object({
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
});

export const ResetPasswordResolver = zodResolver(resetPasswordSchema);

export type ResetPasswordType = TypeOf<typeof resetPasswordSchema>;
