import React, { FC, useMemo } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { convertTimestampToDate } from "../../../../shared/libs/formatDate";
import { ArrowRightIcon } from "../../../../assets/profile/arrowRight";
import { ArrowLeftIcon } from "../../../../assets/profile";
import { IOrderHistory } from "../../api/types";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { getTriggerSign } from "../../libs/helpers/getTriggerSign";
import { historyStyles } from "./history.styles";
import { CancelIcon } from "../../../../assets/system/cancel";

const DEFAULT_LIMIT = 10;

interface IOrderHistoryComponentProps {
    data: IOrderHistory[];
    isLoading: boolean;
    currentPage: number;
    limit?: number;
    handleDeleteRequest: (id: number) => void;
    onRefresh: () => void;
    nextPage: () => void;
    prevPage: () => void;
}

export const OrderHistoryComponent: FC<IOrderHistoryComponentProps> = ({
    data,
    isLoading,
    currentPage,
    limit,
    handleDeleteRequest,
    onRefresh,
    nextPage,
    prevPage,
}: IOrderHistoryComponentProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => historyStyles(theme), [theme]);

    const getPrice = (order: IOrderHistory) => {
        if (order.ord_type === "market" || order.state === "done") {
            return order.avg_price;
        } else if (order.state === "trigger_wait") {
            return order.trigger_price;
        } else {
            return order.price;
        }
    };

    const getTrigger = (order: IOrderHistory) => {
        return order.trigger_price ? (
            <>
                <Text>lastPrice</Text>
                &nbsp;{getTriggerSign(order.ord_type, order.side)}&nbsp;&nbsp;
                <Text>{order.trigger_price}</Text>
            </>
        ) : (
            "-"
        );
    };

    const renderTable = (order: IOrderHistory) => {
        const actualPrice = getPrice(order);
        const value = +actualPrice * +order.origin_volume;
        const executedVolume = Number(order.origin_volume) - Number(order.remaining_volume);
        const filled = ((executedVolume / Number(order.origin_volume)) * 100).toFixed(2);

        // TODO: handle color
        const statusColor = ["wait", "done", "cancel", "pending", "reject", "trigger_wait"].includes(order.state)
            ? styles.accepted.color
            : styles.rejected.color;

        return (
            <View key={order.id} style={styles.table}>
                <View style={styles.tableFirstRow}>
                    <Text style={[styles.tableTextAction, { color: statusColor }]}>
                        {order.side} / {order.ord_type}
                    </Text>
                    <Pressable style={styles.cancelIcon} onPress={() => handleDeleteRequest(order.id)}>
                        <CancelIcon />
                    </Pressable>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableText}>{order.market}</Text>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 50 }]}>
                        <Text style={styles.tableText}>{order.price}</Text>
                        <Text style={styles.tableSubText}>Price</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableText, { marginRight: 60, width: 50 }]}>{order.origin_volume}</Text>
                        <Text style={styles.tableSubText}>Amount</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{value}</Text>
                        <Text style={styles.tableSubText}>Value</Text>
                    </View>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 50 }]}>
                        <Text style={styles.tableText}>{getTrigger(order)}</Text>
                        <Text style={styles.tableSubText}>Trigger </Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableText, { marginRight: 60, width: 50 }, { color: statusColor }]}>
                            {filled}
                        </Text>
                        <Text style={styles.tableSubText}>Filled</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableText, { color: statusColor }]}>{order.state}</Text>
                        <Text style={styles.tableSubText}>Status</Text>
                    </View>
                </View>
                <View style={styles.tableRowSeparatorWrapper}>
                    <View style={styles.tableDateWrapper}>
                        <Text style={styles.tableDate}>{convertTimestampToDate(order.created_at)}</Text>
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
