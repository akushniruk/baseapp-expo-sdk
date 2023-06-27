export const queryBuild = <T extends Record<string, unknown>>(params: T): string => {
    const queryParameters = Object.entries(params)
        .filter(([_, value]) => value !== undefined) // Exclude undefined values
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join("&");

    return queryParameters;
};
