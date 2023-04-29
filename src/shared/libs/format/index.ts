type TFormatNumber = {
    /**
     * Number of digits after dot
     */
    fixed: number;
    /**
     * thousands separator
     */
    thousSep?: string;
    /**
     * float separator
     */
    floatSep?: string;
    /**
     * Number to format
     */
    children?: string | number;
    /**
     * Children's previous value.
     * If undefined, only integer part of the number is highlighted
     */
    prevValue?: string | number;
    /**
     * Color of text
     */
    color?: string;
};

const handleRemoveExponent = (value: TFormatNumber["children"]) => {
    const data = String(value).split(/[eE]/);

    if (data.length === 1) {
        return data[0];
    }

    const sign = Number(value) < 0 ? "-" : "";
    const str = data[0].replace(".", "");
    let result = "";
    let power = Number(data[1]) + 1;

    if (power < 0) {
        result = `${sign}0.`;

        while (power++) {
            result += "0";
        }

        // eslint-disable-next-line
        return result + str.replace(/^\-/, "");
    }

    power -= str.length;

    while (power--) {
        result += "0";
    }

    return `${str}${result}`;
};

const formatWithSeparators = (value: string, thousSep?: string, floatSep?: string) => {
    let fmtNum = value;

    if (thousSep !== floatSep) {
        if (floatSep) {
            fmtNum = fmtNum.replace(".", floatSep);
        }

        if ((thousSep && floatSep) || (thousSep && !floatSep && thousSep !== ".")) {
            const fmtNumParts = fmtNum.toString().split(floatSep || ".");
            fmtNumParts[0] = fmtNumParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousSep);
            fmtNum = fmtNumParts.join(floatSep || ".");
        }
    }

    return fmtNum;
};

const format = (value: TFormatNumber["children"], precision: number, thousSep?: string, floatSep?: string) => {
    if (typeof value === "undefined") {
        return "0";
    }

    let fmtVal: TFormatNumber["children"] = "";
    let isPositive = true;
    let result = "0";

    if (typeof value === "string" && Number(value) < 0) {
        fmtVal = value.slice(1);
        isPositive = false;
    } else if (typeof value === "number" && value < 0) {
        fmtVal = value * -1;
        isPositive = false;
    } else {
        fmtVal = value;
    }

    if (fmtVal !== "" && fmtVal !== 0) {
        result = handleRemoveExponent(
            Number(`${Math.floor(Number(`${handleRemoveExponent(fmtVal)}e${precision}`))}e-${precision}`)
        );
    }

    if (result.indexOf(".") === -1 && precision > 0) {
        result += ".";
    }

    while (result.slice(result.indexOf(".")).length <= precision) {
        result += "0";
    }

    result = formatWithSeparators(result, thousSep, floatSep);

    return isPositive ? result : `-${result}`;
};

export { format, formatWithSeparators };
