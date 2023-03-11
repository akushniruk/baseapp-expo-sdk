import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../../../shared/ui/alerts";
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
                } catch (error: any) {
                    if (
                        error.error.status === 401 &&
                        error.error.data.errors[0].indexOf(
                            "identity.session.missing_otp"
                        ) > -1
                    ) {
                        dispatch(setRequire2FA(true));
                    } else {
                        dispatch(
                            dispatchAlert({
                                type: "error",
                                messageText: error.error.data.errors[0],
                            })
                        );
                    }
                }
            },
        }),
    }),
    overrideExisting: true,
});

export const { useLoginUserMutation } = loginApi;
