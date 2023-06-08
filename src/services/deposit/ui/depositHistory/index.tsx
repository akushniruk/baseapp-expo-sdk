import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { depositHistoryStyles } from "./depositHistory.styles";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { formatDate } from "../../../../shared/libs/formatDate";
import { ArrowRightIcon } from "../../../../assets/profile/arrowRight";
import { ArrowLeftIcon } from "../../../../assets/profile";
import { useGetDepositHistoryMutation } from "../../api/depositApi";
import { IDepositHistory } from "../../api/types";
import i18n from "../../../../shared/libs/i18n/supportedLanguages";
import { truncateMiddle } from "../../../../shared/libs/truncateMiddle";

const DEFAULT_LIMIT = 10;

interface IDepositHistoryProps {
    currency?: string;
}

export const DepositHistory: FC<IDepositHistoryProps> = ({ currency }: IDepositHistoryProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => depositHistoryStyles(theme), [theme]);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getDepositHistory, { isLoading, isSuccess }] = useGetDepositHistoryMutation();

    const DepositHistory: IDepositHistory[] | null = useAppSelector((state: RootState) => state.deposit.list);
    const total: string | null | undefined = useAppSelector((state: RootState) => state.deposit.total);

    const onRefresh = useCallback(() => {
        getDepositHistory({ page: 1, limit: DEFAULT_LIMIT, currency: currency });
    }, []);

    useEffect(() => {
        getDepositHistory({ page: 1, limit: DEFAULT_LIMIT, currency: currency });
    }, []);

    const handleFetchNextPage = () => {
        // TODO: handle last page
        getDepositHistory({ page: currentPage + 1, limit: DEFAULT_LIMIT, currency: currency });
        setCurrentPage(currentPage + 1);
    };
    const handleFetchPrevPage = () => {
        getDepositHistory({ page: currentPage - 1, limit: DEFAULT_LIMIT, currency: currency });
        setCurrentPage(currentPage - 1);
    };

    const renderTable = (item: IDepositHistory) => {
        return (
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableTextAction}>{item.state}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableTextTid}>{truncateMiddle(item.txid, 30)}</Text>
                </View>

                <View style={styles.tableSplittedRow}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.protocol?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("depositHistoryNetwork")}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.currency?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("depositHistoryCurrency")}</Text>
                    </View>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={[styles.tableRow, { marginLeft: 100 }]}>
                        <Text style={styles.tableText}>{item.amount}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("depositHistoryAmount")}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.fee?.toUpperCase()}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("depositHistoryFee")}</Text>
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
            <View style={styles.containerTable}>{DepositHistory?.map(renderTable)}</View>
            <View style={styles.containerPagination}>
                {/* TODO: move to pagination component  */}
                <Pressable style={styles.paginationButton} onPress={handleFetchPrevPage} disabled={currentPage === 1}>
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
        </ScrollView>
    );
};
