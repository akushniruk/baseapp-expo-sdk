import React from "react";
import { Svg } from "react-native-svg";

import Candle from "../candle";
import { SIZE, STEP, CANDLES } from "../chartHelpers";

const Chart = () => (
    <Svg width={SIZE} height={SIZE}>
        {CANDLES.map((candle, index) => (
            <Candle key={candle.time} width={STEP} {...{ candle, index }} />
        ))}
    </Svg>
);

export default Chart;
