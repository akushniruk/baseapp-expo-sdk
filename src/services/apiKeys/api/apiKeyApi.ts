import { api } from "../../../shared/providers/redux/lib/rtkApi";
import { dispatchAlert } from "../../../shared/ui/alerts";
import {
    createApiKey,
    setApiKeyList,
    updateApiKey,
} from "../model/apiKeySlice";
import {
    ApiKey,
    ApiKeyCreateRequest,
    ApiKeyListRequest,
    ApiKeyUpdateRequest,
} from "./types";

// TODO: add type for error
export const apiKeysApi = api.injectEndpoints({
    endpoints: (build) => ({
        getApiKeyList: build.mutation<ApiKey[], ApiKeyListRequest>({
            query(data) {
                return {
                    url: `api/v2/barong/resource/api_keys?page=${data.page}&limit=${data.limit}`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(setApiKeyList(response.data));
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
        createApiKey: build.mutation<ApiKey, ApiKeyCreateRequest>({
            query(data) {
                return {
                    url: `api/v2/barong/resource/api_keys`,
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(createApiKey(response.data));
                    dispatchAlert({
                        type: "success",
                        messageType: "success",
                        messageText: `API key ${response.data.kid} created`,
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
        updateApiKey: build.mutation<ApiKey, ApiKeyUpdateRequest>({
            query(data) {
                return {
                    url: `api/v2/barong/resource/api_keys/${data.kid}`,
                    method: "PATCH",
                    body: {
                        totp_code: data.totp_code,
                        state: data.state,
                    },
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const response = await queryFulfilled;
                    dispatch(updateApiKey(response.data));
                    dispatchAlert({
                        type: "success",
                        messageType: "success",
                        messageText: `API key ${response.data.kid} updated`,
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

export const {
    useCreateApiKeyMutation,
    useUpdateApiKeyMutation,
    useGetApiKeyListMutation,
} = apiKeysApi;
