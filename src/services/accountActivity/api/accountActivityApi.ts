import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setAccountActivityList, setTotal } from "../model/accountActivitySlice";
import { IAccountActivity, AccountActivityRequest } from "./types";

export const accountActivityApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAccountActivity: build.mutation<IAccountActivity[], AccountActivityRequest>({
            query(data) {
                return {
                    url: `api/v2/barong/resource/users/activity/all?limit=${data.limit}&page=${data.page}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setAccountActivityList(response.data));
                    // @ts-ignore
                    dispatch(setTotal(response?.meta?.response.headers.get("total")));
                } catch (error: any) {
                    dispatch(
                        dispatchAlert({
                            type: "error",
                            messageType: "error",
                            messageText: error.error.data.errors[0],
                        })
                    );
                }
            },
        }),
    }),
});

export const { useGetAccountActivityMutation } = accountActivityApi;
