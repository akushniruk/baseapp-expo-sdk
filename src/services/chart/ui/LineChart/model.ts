/* eslint-disable camelcase */
import * as shape from "d3-shape";
import { scaleLinear } from "d3-scale";
import { Dimensions } from "react-native";
import { parse } from "react-native-redash";

import { IKline } from "../../api/types";

export const SIZE = Dimensions.get("window").width;

const POINTS = 1000;

export const buildGraph = (klinePoints: IKline[], label: string) => {
    const priceList = klinePoints.slice(-300);
    const formattedValues = priceList.map(
        (kline: IKline) => [(kline.open + kline.close) / 2, kline.time] as [number, number]
    );
    console.log(priceList.length);
    const prices = formattedValues.map((value) => value[0]);

    const minDate = priceList[0].time;
    const maxDate = priceList[priceList.length - 1].time;
    const scaleX = scaleLinear().domain([minDate, maxDate]).range([0, SIZE]);

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const scaleY = scaleLinear().domain([minPrice, maxPrice]).range([SIZE, 0]);

    return {
        label,
        minPrice,
        maxPrice,
        minDate,
        maxDate,
        path: parse(
            shape
                .line()
                .x(([, x]) => scaleX(x) as number)
                .y(([y]) => scaleY(y) as number)
                .curve(shape.curveBasis)(formattedValues) as string
        ),
    };
};

// export const graphs = () => [
//     {
//         label: "1H",
//         value: 0,
//         data: buildGraph(values.hour, "Last Hour"),
//     },
//     {
//         label: "1D",
//         value: 1,
//         data: buildGraph(values.day, "Today"),
//     },
//     {
//         label: "1M",
//         value: 2,
//         data: buildGraph(values.month, "Last Month"),
//     },
//     {
//         label: "1Y",
//         value: 3,
//         data: buildGraph(values.year, "This Year"),
//     },
//     {
//         label: "all",
//         value: 4,
//         data: buildGraph(values.all, "All time"),
//     },
// ] as const;

// export type GraphIndex = 0 | 1 | 2 | 3 | 4;
