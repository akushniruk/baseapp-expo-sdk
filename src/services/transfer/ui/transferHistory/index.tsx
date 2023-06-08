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

const DEFAULT_LIMIT = 10;

interface ITransferHistoryProps {
    currency?: string;
}

export const TransferHistory: FC<ITransferHistoryProps> = ({ currency }: ITransferHistoryProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => transferHistoryStyles(theme), [theme]);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getTransferHistory, { isLoading, isSuccess }] = useGetTransferHistoryMutation();

    const transferHistory: ITransferHistory[] | null = useAppSelector((state: RootState) => state.transfer.list);
    const total: string | null | undefined = useAppSelector((state: RootState) => state.deposit.total);

    const onRefresh = useCallback(() => {
        getTransferHistory({ page: 1, limit: DEFAULT_LIMIT, currency: currency });
    }, []);

    useEffect(() => {
        getTransferHistory({ page: 1, limit: DEFAULT_LIMIT, currency: currency });
    }, []);

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
        // const isSuccessful = item.result === "succeed";

        return (
            <View style={styles.table}>
                <Text>{JSON.stringify(item)}</Text>
                {/* <View style={styles.tableRow}>
                    <Text style={styles.tableTextAction}>{item.action}</Text>
                    <Text style={isSuccessful ? styles.tableTextStatusSuccess : styles.tableTextStatusFail}>
                        {item.result}
                    </Text>
                </View>
                <View style={styles.tableSplittedRow}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableText}>{item.user_ip}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("accountActivityIpAddress")}</Text>
                    </View>
                    <View style={[styles.tableRow, { marginLeft: 100 }]}>
                        <Text style={styles.tableText}>{getUserAgent(item.user_agent)}</Text>
                        <Text style={styles.tableSubText}>{i18n.t("accountActivityUserAgent")}</Text>
                    </View>
                </View>
                <View style={styles.tableRowSeparatorWrapper}>
                    <View style={styles.tableDateWrapper}>
                        <Text style={styles.tableDate}>{formatDate(item.created_at)}</Text>
                        <View style={styles.tableRowSeparator} />
                    </View>
                </View> */}
            </View>
        );
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        >
            <View style={styles.containerTable}>{transferHistory?.map(renderTable)}</View>
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
