import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl, ActivityIndicator } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { lineChartKlineStyles } from "./lineChartKline.styles";
import { useGetKlineHistoryMutation } from "../api/chartApi";
import { useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";
import Graph from "./LineChart/graph";
import { NoDataIcon } from "../../../assets/system/noDataIcon";
import { getPalette } from "../../../shared/libs/getPalette";
import { getTimeStamps } from "../libs/helpers/getTimestamps";

export const PERIODS = [
    {
        label: "5m",
        value: "5",
    },
    {
        label: "15m",
        value: "15",
    },
    {
        label: "30m",
        value: "30",
    },
    {
        label: "1h",
        value: "60",
    },
    {
        label: "4h",
        value: "240",
    },
    {
        label: "1d",
        value: "1440",
    },
];

export const LineChartKline: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => lineChartKlineStyles(theme), [theme]);

    const [period, setPeriod] = useState<typeof PERIODS[0]>(PERIODS[0]);

    const [getKlineHistory, { isLoading, isSuccess }] = useGetKlineHistoryMutation();

    const currentMarket = useAppSelector((state: RootState) => state.markets.currentMarket);
    const klineHistory = useAppSelector((state: RootState) => state.kline.list);

    useEffect(() => {
        if (currentMarket?.id) {
            const time = getTimeStamps(period);

            getKlineHistory({
                marketId: currentMarket.id,
                period: +period.value,
                time_from: Math.floor(time.time_from_timestamp),
                time_to: Math.floor(time.time_to_timestamp),
            });
        }
    }, [currentMarket, period]);

    const renderPeriods = (periodItem: typeof PERIODS[0]) => {
        return (
            <View>
                <Pressable
                    style={({ pressed }) => [
                        styles.periodButton,
                        {
                            backgroundColor: pressed
                                ? styles.periodButtonPressed.backgroundColor
                                : periodItem.value === period.value
                                ? styles.periodButtonActive.backgroundColor
                                : styles.periodButton.backgroundColor,
                        },
                    ]}
                    onPress={() => setPeriod(periodItem)}
                >
                    <Text
                        style={[
                            styles.periodButtonText,
                            periodItem.value === period.value && styles.periodButtonTextActive,
                        ]}
                    >
                        {periodItem.label}
                    </Text>
                </Pressable>
            </View>
        );
    };

    const renderNoData = () => (
        <View style={styles.noData}>
            <NoDataIcon />
            <Text style={styles.noDataText}>There is no data to show</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.periodsContainer}>{PERIODS.map(renderPeriods)}</View>
            {klineHistory?.length ? <Graph klineHistory={klineHistory} isLoading={isLoading} /> : renderNoData()}
        </View>
    );
};
