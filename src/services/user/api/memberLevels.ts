import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { setMemberLevels } from "../model/userSlice";
import { IMemberLevels } from "./types";

export const memberLevelsApi = api.injectEndpoints({
    endpoints: (build) => ({
        memberLevels: build.query<IMemberLevels, void>({
            query: () => ({
                url: "/api/v2/peatio/public/member-levels",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setMemberLevels(response.data));
                } catch (error) {
                    // TODO: handle errors;
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useMemberLevelsQuery } = memberLevelsApi;
