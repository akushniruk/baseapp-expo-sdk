import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { ResetPasswordType } from "../libs/schema";

type ResetPasswordBodyType = ResetPasswordType & {
    reset_password_token: string;
};

export const resetPasswordApi = api.injectEndpoints({
    endpoints: (build) => ({
        resetPassword: build.mutation<{}, ResetPasswordBodyType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/users/password/confirm_code",
                    method: "POST",
                    body: data,
                };
            },
        }),
    }),
});

export const { useResetPasswordMutation } = resetPasswordApi;
