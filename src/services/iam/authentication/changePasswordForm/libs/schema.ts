import { object, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const changePasswordSchema = object({
    old_password: z.string().min(1, "Password must be at least 1 character"),
    new_password: z.string().min(1, "New password is required"),
    confirm_password: z.string().min(1, "Confirm password is required"),
});

export const ChangePasswordResolver = zodResolver(changePasswordSchema);

export type ChangePasswordType = TypeOf<typeof changePasswordSchema>;
