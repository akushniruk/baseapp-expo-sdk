import { setValueStorage } from "../../../shared/hooks/useMMKVStorage";
import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { setProfile, setRequire2FA } from "../model/userSlice";
import { User } from "./types";

export const logoutApi = api.injectEndpoints({
    endpoints: (build) => ({
        logout: build.mutation<User, void>({
            query: () => ({
                url: "/identity/sessions",
                method: "DELETE",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    if (response) {
                        setValueStorage("csrfToken", "");
                        dispatch(setProfile(response.data || null));
                        dispatch(setRequire2FA(false));
                    }
                } catch (error) {
                    dispatch(setProfile(null));
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useLogoutMutation } = logoutApi;
