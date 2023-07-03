import { Market } from "../../../services/markets/model/type";

export const baseUrl = (withAuth: boolean): string =>
    `ws://localhost:9003/api/v2/ranger/${withAuth ? "private" : "public"}`;

export const generateSocketURI = (withAuth: boolean, s: string[]): string =>
    `${baseUrl(withAuth)}/?stream=${s.sort().join("&stream=")}`;

export const marketStreams = (market: Market): { channels: string[] } => {
    const channels = [`${market.id}.trades`];

    return {
        channels: [...channels, `${market.id}.ob-inc`],
    };
};

export const getStreams = (withAuth: boolean, market: Market | undefined): string[] => {
    const streams: string[] = [];

    const addStream = (stream: string) => {
        if (stream) {
            streams.push(stream);
        }
    };

    if (withAuth) {
        addStream("balances");
        addStream("deposit_address");
        addStream("trade");
        addStream("order");
    }

    addStream("global.tickers");

    if (market) {
        const marketChannels = marketStreams(market).channels;
        streams.push(...marketChannels);
    }

    return streams;
};
