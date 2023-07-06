/* eslint-disable camelcase */
import * as shape from "d3-shape";
import { scaleLinear } from "d3-scale";
import { Dimensions } from "react-native";
import { parse } from "react-native-redash";

import { IKline } from "../../api/types";

export const SIZE = Dimensions.get("window").width - 60;

export const buildGraph = (klinePoints: IKline[]) => {
    const priceList = klinePoints.slice(-400);
    const formattedValues = priceList.map(
        (kline: IKline) => [(kline.open + kline.close) / 2, kline.time] as [number, number]
    );

    const prices = formattedValues.map((value) => value[0]);

    const minDate = priceList[0].time;
    const maxDate = priceList[priceList.length - 1].time;
    const scaleX = scaleLinear().domain([minDate, maxDate]).range([0, SIZE]);

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const scaleY = scaleLinear().domain([minPrice, maxPrice]).range([SIZE, 0]);

    const rangeValue = maxPrice - minPrice;
    const step = rangeValue / 3;

    const rangeDates = maxDate - minDate;
    const stepDate = rangeDates / 3;

    return {
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
        yAxisValues: [maxPrice, minPrice + step * 2, minPrice + step, minPrice],
        xAxisValues: [minDate, minDate + stepDate, minDate + stepDate * 2, maxDate],
    };
};
