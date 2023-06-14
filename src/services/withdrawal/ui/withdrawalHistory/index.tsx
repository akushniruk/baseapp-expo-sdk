import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { withdrawalHistoryStyles } from "./withdrawalHistory.styles";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { formatDate } from "../../../../shared/libs/formatDate";
import { ArrowRightIcon } from "../../../../assets/profile/arrowRight";
import { ArrowLeftIcon } from "../../../../assets/profile";
import { useGetWithdrawalHistoryMutation } from "../../api/withdrawalApi";
import { IWithdrawalHistory } from "../../api/types";
import { truncateMiddle } from "../../../../shared/libs/truncateMiddle";
import i18n from "../../../../shared/libs/i18n/supportedLanguages";

const DEFAULT_LIMIT = 10;

interface IWithdrawalHistoryProps {
    currency?: string;
    limit?: number;
}

export const WithdrawalHistory: FC<IWithdrawalHistoryProps> = ({ currency, limit }: IWithdrawalHistoryProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => withdrawalHistoryStyles(theme), [theme]);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getWithdrawalHistory, { isLoading, isSuccess }] = useGetWithdrawalHistoryMutation();

    const withdrawalHistory: IWithdrawalHistory[] | null = useAppSelector((state: RootState) => state.withdrawal.list);
    const total: string | null | undefined = useAppSelector((state: RootState) => state.deposit.total);

    const onRefresh = useCallback(() => {
        getWithdrawalHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT, currency: currency });
    }, []);

    useEffect(() => {
        getWithdrawalHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT, currency: currency });
    }, []);

    const handleFetchNextPage = () => {
        // TODO: handle last page
        getWithdrawalHistory({ page: currentPage + 1, limit: DEFAULT_LIMIT, currency: currency });
        setCurrentPage(currentPage + 1);
    };
    const handleFetchPrevPage = () => {
        getWithdrawalHistory({ page: currentPage - 1, limit: DEFAULT_LIMIT, currency: currency });
        setCurrentPage(currentPage - 1);
    };

    const renderTable = (item: IWithdrawalHistory) => {
        const statusColor = ["accepted", "succeed"].includes(item.state)
            ? styles.accepted.color
            : styles.rejected.color;

        return (
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableTextAction, { color: statusColor }]}>{item.state}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableTextTid}>{truncateMiddle(item?.blockchain_txid || "", 30)}</Text>
                </View>

                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 120 }]}>
                        <Text style={styles.tableText}>{item.protocol?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("withdrawalHistoryNetwork")}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.currency?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("withdrawalHistoryCurrency")}</Text>
                    </View>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginRight: 60, width: 120 }]}>
                        <Text style={styles.tableText}>{item.amount}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("withdrawalHistoryAmount")}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.fee?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("withdrawalHistoryFee")}</Text>
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

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        >
            <View style={styles.containerTable}>{withdrawalHistory?.map(renderTable)}</View>
            {!limit ? (
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
