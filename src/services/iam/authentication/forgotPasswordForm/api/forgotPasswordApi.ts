import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { User } from "../../../../user";
import { ForgotPasswordType } from "../libs/schema";

export const forgotPasswordApi = api.injectEndpoints({
    endpoints: (build) => ({
        forgotPassword: build.mutation<any, ForgotPasswordType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/users",
                    method: "POST",
                    body: data,
                    credentials: "include",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {}
            },
        }),
    }),
});

export const { useForgotPasswordMutation } = forgotPasswordApi;
