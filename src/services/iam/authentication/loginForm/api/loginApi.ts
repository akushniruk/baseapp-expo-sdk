import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { User } from "../../../../user";
import { setProfile, setRequire2FA } from "../../../../user/model/userSlice";
import { LoginType } from "../libs/schema";

type ResponseType = User;

export const loginApi = api.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation<ResponseType, LoginType>({
            query(data) {
                return {
                    url: "api/v2/barong/identity/sessions",
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setProfile(response.data));
                } catch (error) {
                    // TODO: handle errors;
                    dispatch(setRequire2FA(true));
                }
            },
        }),
    }),
    overrideExisting: true,
});

export const { useLoginUserMutation } = loginApi;
