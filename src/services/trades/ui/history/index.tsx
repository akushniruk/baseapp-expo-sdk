import React, { FC, useMemo } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { formatDate } from "../../../../shared/libs/formatDate";
import { ArrowRightIcon } from "../../../../assets/profile/arrowRight";
import { ArrowLeftIcon } from "../../../../assets/profile";
import { ITradesHistory } from "../../api/types";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { historyStyles } from "./history.styles";

const DEFAULT_LIMIT = 10;

interface ITradesHistoryComponentProps {
    data: ITradesHistory[];
    isLoading: boolean;
    currentPage: number;
    limit?: number;
    onRefresh: () => void;
    nextPage: () => void;
    prevPage: () => void;
}

export const TradesHistoryComponent: FC<ITradesHistoryComponentProps> = ({
    data,
    isLoading,
    currentPage,
    limit,
    onRefresh,
    nextPage,
    prevPage,
}: ITradesHistoryComponentProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => historyStyles(theme), [theme]);

    const renderTable = (trades: ITradesHistory) => {
        const statusColor = ["buy"].includes(trades.side) ? styles.accepted.color : styles.rejected.color;

        return (
            <View key={trades.id} style={styles.table}>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 80 }]}>
                        <Text style={[styles.tableTextAction, { color: statusColor }]}>{trades.side}</Text>
                        <Text style={styles.tableText}>{trades.market}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableText, { marginRight: 60, width: 50 }]}>{trades.amount}</Text>
                        <Text style={styles.tableSubText}>Amount</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{trades.price}</Text>
                        <Text style={styles.tableSubText}>Price</Text>
                    </View>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 80 }]}>
                        <Text style={styles.tableText}>{trades.total}</Text>
                        <Text style={styles.tableSubText}>Total</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableText, { marginRight: 60, width: 50 }, { color: statusColor }]}>
                            {trades.fee}
                        </Text>
                        <Text style={styles.tableSubText}>Fee</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableText, { color: statusColor }]}>{trades.fee_amount}</Text>
                        <Text style={styles.tableSubText}>Fee amount</Text>
                    </View>
                </View>
                <View style={styles.tableRowSeparatorWrapper}>
                    <View style={styles.tableDateWrapper}>
                        <Text style={styles.tableDate}>{formatDate(trades.created_at)}</Text>
                        <View style={styles.tableRowSeparator} />
                    </View>
                </View>
            </View>
        );
    };

    if (!data?.length) {
        return (
            <View style={styles.noData}>
                <NoDataIcon />
                <Text style={styles.noDataText}>There is no data to show</Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        >
            <View onStartShouldSetResponder={() => true}>
                <View style={styles.containerTable}>{data?.map(renderTable)}</View>
                {!limit && data?.length > DEFAULT_LIMIT ? (
                    <View style={styles.containerPagination}>
                        {/* TODO: move to pagination component  */}
                        <Pressable style={styles.paginationButton} onPress={prevPage} disabled={currentPage === 1}>
                            <ArrowLeftIcon color={currentPage === 1 ? "" : "#000"} />
                        </Pressable>
                        <Text style={styles.paginationCounter}>
                            {(currentPage - 1) * DEFAULT_LIMIT + 1} - {currentPage * DEFAULT_LIMIT}
                        </Text>
                        <Pressable
                            style={styles.paginationButton}
                            onPress={nextPage}
                            // disabled={total ? currentPage * DEFAULT_LIMIT >= +total : false}
                        >
                            <ArrowRightIcon color="#000" />
                        </Pressable>
                    </View>
                ) : null}
            </View>
        </ScrollView>
    );
};
