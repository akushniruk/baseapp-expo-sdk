import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { View, ScrollView, Text, Pressable, RefreshControl } from "react-native";
import { accountActivityStyles } from "./accountActivity.styles";
import { useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { RootState } from "../../../shared/providers/redux/model/store";
import { IAccountActivity } from "../api/types";
import { useGetAccountActivityMutation } from "../api/accountActivityApi";
import { getUserAgent } from "../libs/userAgend";
import { formatDate } from "../../../shared/libs/formatDate";
import { ArrowRightIcon } from "../../../assets/profile/arrowRight";
import { ArrowLeftIcon } from "../../../assets/profile";
import i18n from "../../../shared/libs/i18n/supportedLanguages";

const DEFAULT_LIMIT = 10;

export const AccountActivity: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => accountActivityStyles(theme), [theme]);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getAccountActivity, { isLoading, isSuccess }] = useGetAccountActivityMutation();

    const accountActivity: IAccountActivity[] | null = useAppSelector((state: RootState) => state.accountActivity.list);
    const total: string | null | undefined = useAppSelector((state: RootState) => state.accountActivity.total);

    const onRefresh = useCallback(() => {
        getAccountActivity({ page: 1, limit: DEFAULT_LIMIT });
    }, []);

    useEffect(() => {
        getAccountActivity({ page: 1, limit: DEFAULT_LIMIT });
    }, []);

    const handleFetchNextPage = () => {
        // TODO: handle last page
        getAccountActivity({ page: currentPage + 1, limit: DEFAULT_LIMIT });
        setCurrentPage(currentPage + 1);
    };
    const handleFetchPrevPage = () => {
        getAccountActivity({ page: currentPage - 1, limit: DEFAULT_LIMIT });
        setCurrentPage(currentPage - 1);
    };

    const renderTable = (item: IAccountActivity) => {
        const isSuccessful = item.result === "succeed";

        return (
            <View style={styles.table}>
                <View style={styles.tableRow}>
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
                </View>
            </View>
        );
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        >
            <View style={styles.containerTable}>{accountActivity?.map(renderTable)}</View>
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
