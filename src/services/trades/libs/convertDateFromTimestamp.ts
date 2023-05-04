export const convertDateFromTimestamp = (timestamp: string | number) => {
    return new Date(timestamp)
}

export const getHHMMSSFromDate = (date: Date) => {
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}