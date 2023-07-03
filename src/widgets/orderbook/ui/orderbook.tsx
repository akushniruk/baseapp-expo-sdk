import { FC, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import { OrderBookTable } from "../../../services/orderbook/ui/orderbook";
import { OrderbookWidgetStyles } from "./orderbook.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { accumulateVolume, calculateMaxVolume } from "../../../services/orderbook/libs/calculateOrderBookMaxVolume";
import { sortAsks, sortBids } from "../../../services/orderbook/libs/sortAsksAndBids";
import { useAppSelector } from "../../../shared/providers/redux/lib/useAppSelector";
import { RootState } from "../../../shared/providers/redux/model/store";

export const OrderbookWidget: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => OrderbookWidgetStyles(theme), [theme]);

    const asks = useAppSelector((state: RootState) => state.orderbook.asks);
    const bids = useAppSelector((state: RootState) => state.orderbook.bids);

    const sortedBids = useMemo(() => sortBids(bids), [bids]);
    const sortedAsks = useMemo(() => sortAsks(asks), [asks]);
    const orderBookEntryAsks = useMemo(() => accumulateVolume(sortedAsks), [sortedAsks]);
    const orderBookEntryBids = useMemo(() => accumulateVolume(sortedBids), [sortedBids]);
    const maxVolume = useMemo(() => calculateMaxVolume(sortedBids, sortedAsks), [sortedBids, sortedAsks]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.orderbookContainer}>
                    <View style={styles.orderbookTableWrapper}>
                        <Text style={styles.headerText}>Bid</Text>
                        <OrderBookTable
                            key="bids"
                            side="bid"
                            data={bids}
                            orderBookEntry={orderBookEntryBids}
                            maxVolume={maxVolume}
                        />
                    </View>
                    <View style={styles.orderbookTableWrapper}>
                        <Text style={styles.headerText}>Ask</Text>
                        <OrderBookTable
                            key="asks"
                            side="ask"
                            data={asks}
                            orderBookEntry={orderBookEntryAsks}
                            maxVolume={maxVolume}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
