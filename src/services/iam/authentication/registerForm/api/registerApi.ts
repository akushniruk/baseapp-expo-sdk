import { api } from "../../../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../../../shared/ui/alerts";
import { User } from "../../../../user";
import { setProfile } from "../../../../user/model/userSlice";
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
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setProfile(response.data));
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
    }),
});

export const { useRegisterUserMutation } = registerApi;
