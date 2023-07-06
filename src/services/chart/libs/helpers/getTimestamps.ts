import { PERIODS } from "../../ui";

export const getTimeStamps = (period: typeof PERIODS[0]) => {
    const candles = 1000;
    const time_to = new Date(); // Current date and time

    // Convert period to milliseconds
    const periodInMillis = +period.value * 60000; // Convert minutes to milliseconds

    // Calculate time_from
    const time_from = new Date(time_to.getTime() - periodInMillis * candles);

    return {
        time_from_timestamp: time_from.getTime() / 1000,
        time_to_timestamp: time_to.getTime() / 1000,
    };
};
