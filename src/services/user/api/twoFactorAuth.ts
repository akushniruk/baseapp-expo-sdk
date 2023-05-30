import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setMFA } from "../model/userSlice";
import { IMFA } from "./types";

export const generateMFAApi = api.injectEndpoints({
    endpoints: (build) => ({
        getMFA: build.mutation<IMFA, void>({
            query(data) {
                return {
                    url: `/api/v2/barong/resource/otp/generate_qrcode`,
                    method: "POST",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    // @ts-ignore
                    dispatch(setMFA(response.data?.data));
                } catch (error) {
                    // TODO: handle errors;
                    console.log(error);
                }
            },
        }),
        toggle2FA: build.mutation<void, { code: string; status: "enable" | "disable" }>({
            query(data) {
                return {
                    url: `api/v2/barong//resource/otp/${data.status}`,
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    dispatchAlert({
                        type: "success",
                        messageType: "success",
                        messageText: `Two-Factor Authentication has been enabled.`,
                    });
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

export const { useGetMFAMutation, useToggle2FAMutation } = generateMFAApi;
