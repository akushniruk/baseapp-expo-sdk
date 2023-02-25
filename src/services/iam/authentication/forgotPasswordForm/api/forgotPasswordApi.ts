import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { ForgotPasswordType } from "../libs/schema";

export const forgotPasswordApi = api.injectEndpoints({
    endpoints: (build) => ({
        forgotPassword: build.mutation<{}, ForgotPasswordType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/users/password/generate_code",
                    method: "POST",
                    body: data,
                };
            },
        }),
    }),
});

export const { useForgotPasswordMutation } = forgotPasswordApi;
