import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { chartStyles } from "./chartKLine.styles";
import { useGetKlineHistoryMutation } from "../api/chartApi";
import { useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";
// import { LineChart } from "./LineChart";
import Graph from "./LineChart/graph";

export const ChartKLine: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => chartStyles(theme), [theme]);

    const [getKlineHistory, { isLoading, isSuccess }] = useGetKlineHistoryMutation();

    const currentMarket = useAppSelector((state: RootState) => state.markets.currentMarket);
    const klineHistory = useAppSelector((state: RootState) => state.kline.list);

    useEffect(() => {
        if (currentMarket?.id) {
            getKlineHistory({ marketId: currentMarket.id, period: 15, time_from: 1688397300, time_to: 1688415300 });
        }
        // TODO: remove this
        getKlineHistory({ marketId: "dashbtc", period: 15, time_from: 1687662900, time_to: 1688562900 });
    }, [currentMarket]);

    console.log("chart", klineHistory.length, klineHistory);

    if (!klineHistory.length) {
        return <Text>No data...</Text>;
    }

    return <Graph klineHistory={klineHistory} />;
};
