import { FC, useMemo } from "react";
import { View, Text } from "react-native";
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

    const sortedBids = sortBids(bids);
    const sortedAsks = sortAsks(asks);
    const orderBookEntryAsks = accumulateVolume(sortedAsks);
    const orderBookEntryBids = accumulateVolume(sortedBids);
    const maxVolume = calculateMaxVolume(sortedBids, sortedAsks);

    return (
        <View style={styles.container}>
            <View style={styles.orderbookTableWrapper}>
                <Text>Bid</Text>
                <OrderBookTable side="bid" data={bids} orderBookEntry={orderBookEntryBids} maxVolume={maxVolume} />
            </View>
            <View style={styles.orderbookTableWrapper}>
                <Text>Ask</Text>
                <OrderBookTable side="ask" data={asks} orderBookEntry={orderBookEntryAsks} maxVolume={maxVolume} />
            </View>
        </View>
    );
};
