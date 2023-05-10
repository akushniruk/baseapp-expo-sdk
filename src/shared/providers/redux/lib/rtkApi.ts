import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { RootState } from '../model/store'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_REST_API || "http://192.168.0.102:9002",
    prepareHeaders: (headers: Headers) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        // headers.set(
        //     "cookie",
        //     `_barong_session=b1b87ee4023b3c5d3972f3739a7eb2ec`
        // );
        // console.log("headers", headers);

        return headers;
    },
    // credentials: "include",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
    /**
     * `reducerPath` is optional and will not be required by most users.
     * This is useful if you have multiple API definitions,
     * e.g. where each has a different domain, with no interaction between endpoints.
     * Otherwise, a single API definition should be used in order to support tag invalidation,
     * among other features
     */
    reducerPath: "splitApi",
    /**
     * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
     */
    baseQuery: baseQueryWithRetry,
    /**
     * Tag types must be defined in the original API definition
     * for any tags that would be provided by injected endpoints
     */
    tagTypes: ["Markets"],
    /**
     * This api has endpoints injected in adjacent files,
     * which is why no endpoints are shown below.
     * If you want all endpoints defined in the same file, they could be included here instead
     */
    endpoints: () => ({}),
});
