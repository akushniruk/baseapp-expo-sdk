import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { User } from "../../../../user";
import { ResetPasswordType } from "../libs/schema";

type ResponseType = User;
type ResetPasswordBodyType = ResetPasswordType & {
    reset_password_token: string;
};

export const resetPasswordApi = api.injectEndpoints({
    endpoints: (build) => ({
        resetPassword: build.mutation<ResponseType, ResetPasswordBodyType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/users/password/confirm_code",
                    method: "POST",
                    body: data,
                    credentials: "include",
                };
            },
        }),
    }),
});

export const { useResetPasswordMutation } = resetPasswordApi;
