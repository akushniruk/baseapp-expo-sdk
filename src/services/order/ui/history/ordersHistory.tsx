import React, { FC, useCallback, useEffect, useState } from "react";
import { OrderHistoryComponent } from ".";
import { View } from "react-native";
import { useGetUserOrdersHistoryMutation } from "../../api/order";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useAppSelector } from "../../../../shared";
import { IOrderHistory } from "../../api/types";

const DEFAULT_LIMIT = 10;

interface IOrdersHistoryProps {
    limit?: number;
    type: "all" | "open";
}

export const OrdersHistory: FC<IOrdersHistoryProps> = ({ limit, type }: IOrdersHistoryProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [getOrderHistory, { isLoading, isSuccess }] = useGetUserOrdersHistoryMutation();

    const orderHistory: IOrderHistory[] | null = useAppSelector((state: RootState) => state.order.historyList);

    const onRefresh = useCallback(() => {
        getOrderHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT, historyType: type });
    }, [limit]);

    useEffect(() => {
        getOrderHistory({ page: 1, limit: limit ? limit : DEFAULT_LIMIT, historyType: type });
    }, [limit]);

    const handleFetchNextPage = () => {
        // TODO: handle last page
        getOrderHistory({ page: currentPage + 1, limit: limit ? limit : DEFAULT_LIMIT, historyType: type });
        setCurrentPage(currentPage + 1);
    };
    const handleFetchPrevPage = () => {
        getOrderHistory({ page: currentPage - 1, limit: limit ? limit : DEFAULT_LIMIT, historyType: type });
        setCurrentPage(currentPage - 1);
    };

    const handleDelete = (uuid: string) => {
        console.log("delete", uuid);
    };

    return (
        <View>
            <OrderHistoryComponent
                data={orderHistory}
                isLoading={isLoading}
                currentPage={currentPage}
                limit={limit}
                handleDeleteRequest={handleDelete}
                onRefresh={onRefresh}
                nextPage={handleFetchNextPage}
                prevPage={handleFetchPrevPage}
            />
        </View>
    );
};
