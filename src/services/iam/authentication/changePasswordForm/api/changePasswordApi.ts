import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { ChangePasswordType } from "../libs/schema";

type ChangePasswordBodyType = ChangePasswordType & {
    old_password: string;
    new_password: string;
    confirm_password: string;
};

export const changePasswordApi = api.injectEndpoints({
    endpoints: (build) => ({
        changePassword: build.mutation<{}, ChangePasswordBodyType>({
            query(data) {
                return {
                    url: "api/v2/barong/resource/users/password",
                    method: "PUT",
                    body: data,
                };
            },
        }),
    }),
});

export const { useChangePasswordMutation } = changePasswordApi;
