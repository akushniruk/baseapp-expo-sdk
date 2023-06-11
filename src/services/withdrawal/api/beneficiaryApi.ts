import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import { setBeneficiaryList, setCreatedBeneficiary } from "../model/beneficiarySlice";
import { IBeneficiary } from "./types";

export type CreateBeneficiaryRequest = {
    name: string;
    otp: string;
    blockchain_key: string;
    currency: string;
    data: {
        address?: string;
        account_number?: string;
        bank_name?: string;
        bank_swift_code?: string;
        full_name?: string;
        intermediary_bank_name?: string;
        intermediary_bank_swift_code?: string;
        description?: string;
    };
};

export const beneficiaryApi = api.injectEndpoints({
    endpoints: (build) => ({
        getBeneficiaries: build.mutation<IBeneficiary[], { currency: string }>({
            query(data) {
                return {
                    url: `api/v2/peatio/account/beneficiaries?currency_id=${data.currency}&state[]=active&state[]=pending`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setBeneficiaryList(response.data));
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
        createBeneficiary: build.mutation<IBeneficiary, CreateBeneficiaryRequest>({
            query(data) {
                return {
                    url: `api/v2/peatio/account/beneficiaries`,
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setCreatedBeneficiary(response.data));
                    dispatch(
                        dispatchAlert({
                            type: "success",
                            messageType: "success",
                            messageText: "success.beneficiaries.created",
                        })
                    );
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
        activateBeneficiary: build.mutation<IBeneficiary[], { id: string | number; pin: string }>({
            query(data) {
                return {
                    url: `api/v2/peatio//account/beneficiaries/${data.id}/activate`,
                    method: "PATCH",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    dispatch(
                        dispatchAlert({
                            type: "success",
                            messageType: "success",
                            messageText: "success.beneficiaries.activated",
                        })
                    );
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
        deleteBeneficiary: build.mutation<IBeneficiary[], { id: string | number; otp: string }>({
            query(data) {
                return {
                    url: `api/v2/peatio/account/beneficiaries/${data.id}`,
                    method: "DELETE",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    dispatch(
                        dispatchAlert({
                            type: "success",
                            messageType: "success",
                            messageText: "success.beneficiaries.deleted",
                        })
                    );
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
        resendPinBeneficiary: build.mutation<IBeneficiary[], { id: string | number }>({
            query(data) {
                return {
                    url: `api/v2/peatio/account/beneficiaries/${data.id}/resend_pin`,
                    method: "PATCH",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    dispatch(
                        dispatchAlert({
                            type: "success",
                            messageType: "success",
                            messageText: "success.beneficiaries.resent_pin",
                        })
                    );
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

export const {
    useGetBeneficiariesMutation,
    useResendPinBeneficiaryMutation,
    useDeleteBeneficiaryMutation,
    useActivateBeneficiaryMutation,
    useCreateBeneficiaryMutation,
} = beneficiaryApi;
