import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { chartStyles } from "./chartKLine.styles";
import { useGetKlineHistoryMutation } from "../api/chartApi";
import { useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";
import { CandleStickChart } from "./candleStickChart";

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
        getKlineHistory({ marketId: "btczar", period: 15, time_from: 1688397300, time_to: 1688415300 });
    }, [currentMarket]);

    return <CandleStickChart />;
};
