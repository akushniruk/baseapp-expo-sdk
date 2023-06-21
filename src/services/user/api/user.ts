import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { setProfile } from "../model/userSlice";
import { User } from "./types";

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        userMe: build.query<User, void>({
            query: () => ({
                url: "/api/v2/barong/resource/users/me",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setProfile(response.data));
                } catch (error) {
                    dispatch(setProfile(null));
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useUserMeQuery } = userApi;
