import { api } from "../../../../../shared/providers/redux/lib/rtkApi";

export type ResendVerificationCodeType = {
    email: string;
    captcha_response: string;
};

export const resendVerificationCodeApi = api.injectEndpoints({
    endpoints: (build) => ({
        resendVerificationCode: build.mutation<{}, ResendVerificationCodeType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/users/email/generate_code",
                    method: "POST",
                    body: data,
                    credentials: "include",
                };
            },
        }),
    }),
});

export const { useResendVerificationCodeMutation } = resendVerificationCodeApi;
