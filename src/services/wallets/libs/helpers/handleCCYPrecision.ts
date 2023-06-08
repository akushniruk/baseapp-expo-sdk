import { Currency } from "../../../currencies/model/type";

export const handleCCYPrecision = (currencies: Currency[], currency: string, defaultPrecision: number): number => {
    const precisableCCY =
        currencies[0] && currency.length && currencies.find((item) => item.id.toLowerCase() === currency.toLowerCase());

    return (precisableCCY && precisableCCY.precision) || defaultPrecision;
};
