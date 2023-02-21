import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { User } from "../../../../user";
import { LoginType } from "../libs/schema";

type ResponseType = User;

export const loginApi = api.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation<ResponseType, LoginType>({
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

export const { useLoginUserMutation } = loginApi;
