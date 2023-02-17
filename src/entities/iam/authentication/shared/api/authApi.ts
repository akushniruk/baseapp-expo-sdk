import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenericResponse } from "./types";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:9002/api/v2/barong/identity`,
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<GenericResponse, FormData>({
            query(data) {
                return {
                    url: "users",
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
} = authApi;
