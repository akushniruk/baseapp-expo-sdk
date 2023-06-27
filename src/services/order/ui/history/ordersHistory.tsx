import React, { FC, useCallback, useEffect, useState } from "react";
import { OrderHistoryComponent } from ".";
import { View } from "react-native";
import { useCancelOrderMutation, useGetUserOrdersHistoryMutation } from "../../api/order";
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
    const [cancelOrder, { isLoading: cancelIsLoading, isSuccess: cancelIsSuccess }] = useCancelOrderMutation();

    const orderHistory: IOrderHistory[] | null = useAppSelector((state: RootState) =>
        type === "all" ? state.order.historyList : state.order.openOrders
    );

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

    const handleDelete = (id: number) => {
        cancelOrder({ id });
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
