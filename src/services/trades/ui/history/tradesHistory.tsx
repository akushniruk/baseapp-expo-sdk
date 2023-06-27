import React, { FC, useCallback, useEffect, useState } from "react";
import { TradesHistoryComponent } from ".";
import { View } from "react-native";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useAppSelector } from "../../../../shared";
import { ITradesHistory } from "../../api/types";
import { useGetUserTradesHistoryMutation } from "../../api/trades";

const DEFAULT_LIMIT = 10;

interface ITradesHistoryProps {
    limit?: number;
}

export const TradesHistory: FC<ITradesHistoryProps> = ({ limit }: ITradesHistoryProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getTradesHistory, { isLoading, isSuccess }] = useGetUserTradesHistoryMutation();

    const orderHistory: ITradesHistory[] | null = useAppSelector((state: RootState) => state.trades.historyList);

    const onRefresh = useCallback(() => {
        getTradesHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT });
    }, [limit]);

    useEffect(() => {
        getTradesHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT });
    }, [limit]);

    const handleFetchNextPage = () => {
        // TODO: handle last page
        getTradesHistory({ page: currentPage + 1, limit: limit ? limit : DEFAULT_LIMIT });
        setCurrentPage(currentPage + 1);
    };
    const handleFetchPrevPage = () => {
        getTradesHistory({ page: currentPage - 1, limit: limit ? limit : DEFAULT_LIMIT });
        setCurrentPage(currentPage - 1);
    };

    return (
        <View>
            <TradesHistoryComponent
                data={orderHistory}
                isLoading={isLoading}
                currentPage={currentPage}
                limit={limit}
                onRefresh={onRefresh}
                nextPage={handleFetchNextPage}
                prevPage={handleFetchPrevPage}
            />
        </View>
    );
};
