import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { VictoryChart, VictoryCandlestick, VictoryAxis, VictoryLabel, VictoryZoomContainer } from "victory-native";

type PeriodButtonProps = {
    period: string;
    selectedPeriod: string;
    onPress: (period: string) => void;
};

const PeriodButton = ({ period, selectedPeriod, onPress }: PeriodButtonProps) => {
    const isSelected = period === selectedPeriod;

    return (
        <TouchableOpacity
            onPress={() => onPress(period)}
            style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                backgroundColor: isSelected ? "#5f5c87" : "#fff",
                borderRadius: 6,
                marginHorizontal: 4,
            }}
        >
            <Text style={{ color: isSelected ? "#fff" : "#5f5c87" }}>{period}</Text>
        </TouchableOpacity>
    );
};

const generateData = () => {
    const startDate = new Date(2023, 6, 1);
    const data = [];

    for (let i = 0; i < 50; i++) {
        const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
        const open = Math.random() * 100;
        const close = Math.random() * 100;
        const high = Math.random() * 100;
        const low = Math.random() * 100;

        data.push({ date, open, close, high, low });
    }

    return data;
};

const CandlestickChart = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("1d"); // Initial period is set to '1d'

    // Candlestick data for different periods
    const data = {
        "1d": generateData(),
        "1w": [
            { date: new Date(2023, 5, 26), open: 12, close: 20, high: 35, low: 7 },
            { date: new Date(2023, 6, 2), open: 30, close: 45, high: 50, low: 20 },
            // Data for 1-week period
        ],
        "1m": [
            { date: new Date(2023, 5, 1), open: 18, close: 25, high: 30, low: 15 },
            { date: new Date(2023, 6, 1), open: 28, close: 32, high: 40, low: 20 },
            // Data for 1-month period
        ],
        // Add more data for other periods as needed
    };

    // Function to handle period selection
    const handlePeriodSelect = (period: string) => {
        setSelectedPeriod(period);
    };

    return (
        <View>
            <VictoryChart domainPadding={{ y: 10 }} containerComponent={<VictoryZoomContainer />}>
                <VictoryAxis
                    dependentAxis
                    orientation="right" // Set the orientation to right
                    style={{ axisLabel: { padding: 35 }, axis: { stroke: "none" } }}
                    axisLabelComponent={<VictoryLabel dy={-20} />}
                    label="Price"
                    offsetY={200}
                    width={400}
                    height={380}
                    offsetX={50}
                />
                <VictoryAxis
                    scale={{ x: "time" }}
                    style={{ axisLabel: { padding: 30 } }}
                    offsetY={40}
                    tickFormat={(x) => new Date(x).toLocaleDateString()}
                />
                <VictoryCandlestick
                    candleColors={{ positive: "#5f5c87", negative: "#d73a49" }}
                    data={data[selectedPeriod]}
                    x="date"
                />
            </VictoryChart>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                <PeriodButton period="1d" selectedPeriod={selectedPeriod} onPress={handlePeriodSelect} />
                <PeriodButton period="1w" selectedPeriod={selectedPeriod} onPress={handlePeriodSelect} />
                <PeriodButton period="1m" selectedPeriod={selectedPeriod} onPress={handlePeriodSelect} />
                {/* Add more period buttons as needed */}
            </View>
        </View>
    );
};

export default CandlestickChart;
