import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { transferHistoryStyles } from "./transferHistory.styles";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { formatDate } from "../../../../shared/libs/formatDate";
import { ArrowRightIcon } from "../../../../assets/profile/arrowRight";
import { ArrowLeftIcon } from "../../../../assets/profile";
import { useGetTransferHistoryMutation } from "../../api/transferApi";
import { ITransferHistory } from "../../api/types";
import i18n from "../../../../shared/libs/i18n/supportedLanguages";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";

const DEFAULT_LIMIT = 10;

interface ITransferHistoryProps {
    currency?: string;
    limit?: number;
}

export const TransferHistory: FC<ITransferHistoryProps> = ({ currency, limit }: ITransferHistoryProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => transferHistoryStyles(theme), [theme]);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getTransferHistory, { isLoading, isSuccess }] = useGetTransferHistoryMutation();

    const transferHistory: ITransferHistory[] | null = useAppSelector((state: RootState) => state.transfer.list);
    const total: string | null | undefined = useAppSelector((state: RootState) => state.deposit.total);

    const onRefresh = useCallback(() => {
        getTransferHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT, currency: currency });
    }, [limit]);

    useEffect(() => {
        getTransferHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT, currency: currency });
    }, [limit]);

    const handleFetchNextPage = () => {
        // TODO: handle last page
        getTransferHistory({ page: currentPage + 1, limit: DEFAULT_LIMIT, currency: currency });
        setCurrentPage(currentPage + 1);
    };
    const handleFetchPrevPage = () => {
        getTransferHistory({ page: currentPage - 1, limit: DEFAULT_LIMIT, currency: currency });
        setCurrentPage(currentPage - 1);
    };

    const renderTable = (item: ITransferHistory) => {
        const statusColor = ["completed", "done"].includes(item.status) ? styles.accepted.color : styles.default.color;

        const toAccount = item.receiver_username?.toUpperCase() || item.receiver_uid?.toUpperCase();

        return (
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableTextAction, { color: statusColor }]}>{item.status}</Text>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 120 }]}>
                        <Text style={styles.tableText}>{item.amount}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("transferHistoryAmount")}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.currency?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("transferHistoryCurrency")}</Text>
                    </View>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 120 }]}>
                        <Text style={styles.tableText}>
                            {item.direction && item.direction.replace(/^./, item.direction[0].toUpperCase())}
                        </Text>
                        <Text style={styles.tableSubText}>{i18n.t("transferHistoryDirection")}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{toAccount}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("transferHistoryToAccount")}</Text>
                    </View>
                </View>
                <View style={styles.tableRowSeparatorWrapper}>
                    <View style={styles.tableDateWrapper}>
                        <Text style={styles.tableDate}>{formatDate(item.created_at)}</Text>
                        <View style={styles.tableRowSeparator} />
                    </View>
                </View>
            </View>
        );
    };

    if (!transferHistory?.length) {
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
            <View style={styles.containerTable}>{transferHistory?.map(renderTable)}</View>
            {!limit && transferHistory?.length > DEFAULT_LIMIT ? (
                <View style={styles.containerPagination}>
                    {/* TODO: move to pagination component  */}
                    <Pressable
                        style={styles.paginationButton}
                        onPress={handleFetchPrevPage}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeftIcon color={currentPage === 1 ? "" : "#000"} />
                    </Pressable>
                    <Text style={styles.paginationCounter}>
                        {(currentPage - 1) * DEFAULT_LIMIT + 1} - {currentPage * DEFAULT_LIMIT}
                    </Text>
                    <Pressable
                        style={styles.paginationButton}
                        onPress={handleFetchNextPage}
                        disabled={total ? currentPage * DEFAULT_LIMIT >= +total : false}
                    >
                        <ArrowRightIcon color={total && currentPage * DEFAULT_LIMIT >= +total ? "" : "#000"} />
                    </Pressable>
                </View>
            ) : null}
        </ScrollView>
    );
};
