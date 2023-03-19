import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { setPeatioMember } from "../model/userSlice";
import { User } from "./types";

export const memberApi = api.injectEndpoints({
    endpoints: (build) => ({
        memberMe: build.query<User, void>({
            query: () => ({
                url: "/api/v2/peatio/account/members/me",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setPeatioMember(response.data));
                } catch (error) {
                    // TODO: handle errors;
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useMemberMeQuery } = memberApi;
