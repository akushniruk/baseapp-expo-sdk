import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { User } from "../../../../user";
import { RegisterType } from "../libs/schema";

type ResponseType = User;

export const registerApi = api.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation<ResponseType, RegisterType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/users",
                    method: "POST",
                    body: data,
                };
            },
        }),
        // loginUser: builder.mutation<
        //     { access_token: string; status: string },
        //     LoginInput
        // >({
        //     query(data) {
        //         return {
        //             url: "login",
        //             method: "POST",
        //             body: data,
        //             credentials: "include",
        //         };
        //     },
        //     async onQueryStarted(args, { dispatch, queryFulfilled }) {
        //         try {
        //             await queryFulfilled;
        //             await dispatch(userApi.endpoints.getMe.initiate(null));
        //         } catch (error) {}
        //     },
        // }),
        // verifyEmail: builder.mutation<
        //     GenericResponse,
        //     { verificationCode: string }
        // >({
        //     query({ verificationCode }) {
        //         return {
        //             url: `verifyemail/${verificationCode}`,
        //             method: "GET",
        //         };
        //     },
        // }),
        // logoutUser: builder.mutation<void, void>({
        //     query() {
        //         return {
        //             url: "logout",
        //             credentials: "include",
        //         };
        //     },
        // }),
    }),
});

export const {
    // useLoginUserMutation,
    useRegisterUserMutation,
    // useLogoutUserMutation,
    // useVerifyEmailMutation,
} = registerApi;
