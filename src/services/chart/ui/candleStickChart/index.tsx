import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import Svg, { Path, Line } from "react-native-svg";
import * as d3Shape from "d3-shape";
import * as d3Scale from "d3-scale";
import moment from "moment";

const CandlestickChart = ({ klineHistory }) => {
    const [selectedPeriod, setSelectedPeriod] = useState("15m");

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    // Calculate the domain for x-axis scale based on selected period
    const xDomain = klineHistory.map((d) => d.time);
    const xScale = d3Scale
        .scaleTime()
        .domain([new Date(Math.min(...xDomain)), new Date(Math.max(...xDomain))])
        .range([margin.left, width - margin.right]);

    // Get the time format based on selected period
    const getTimeFormat = (period) => {
        switch (period) {
            case "1m":
            case "3m":
            case "5m":
            case "15m":
                return "YYYY-MM-DD HH:mm";
            case "30m":
            case "1h":
            case "4h":
                return "YYYY-MM-DD HH:mm";
            case "1d":
            case "3d":
                return "YYYY-MM-DD";
            default:
                return "YYYY-MM-DD HH:mm";
        }
    };

    // Format the time based on selected period
    const formatTime = (time) => {
        const format = getTimeFormat(selectedPeriod);
        return moment(time).format(format);
    };

    // Rest of the code...

    return (
        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }} onScroll={handleScroll} scrollEventThrottle={16}>
            <TouchableOpacity activeOpacity={1} onPress={handleChartTouch}>
                <Svg width={width} height={height}>
                    {/* Render the candlestick chart */}
                    <Path d={candlestickGenerator(klineHistory)} fill="none" stroke="steelblue" />

                    {/* Render the crosshair cursor */}
                    {/* Rest of the code... */}

                    {/* Render x-axis labels */}
                    {klineHistory.map((d, i) => (
                        <Text
                            key={i}
                            x={xScale(new Date(d.time))}
                            y={height - margin.bottom + 20}
                            fill="black"
                            fontSize={12}
                            textAnchor="middle"
                        >
                            {formatTime(d.time)}
                        </Text>
                    ))}

                    {/* Render y-axis labels */}
                    {/* Rest of the code... */}
                </Svg>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default CandlestickChart;
