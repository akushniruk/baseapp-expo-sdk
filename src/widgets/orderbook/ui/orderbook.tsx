import { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { OrderBookTable } from "../../../services/orderbook/ui/orderbook";
import { OrderbookWidgetStyles } from "./orderbook.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { accumulateVolume, calculateMaxVolume } from "../../../services/orderbook/libs/calculateOrderBookMaxVolume";
import { sortAsks, sortBids } from "../../../services/orderbook/libs/sortAsksAndBids";

const asks = [
    ["15.0", "1.702166810435176"],
    ["20.0", "80.20216681043517"],
    ["20.5", "10.202166810435177"],
    ["30.0", "1.202166810435176"],
];

const bids = [
    ["10.95", "2.1384113356851073"],
    ["10.90", "45.638411335685106"],
    ["10.85", "35.638411335685106"],
    ["10.70", "10.638411335685108"],
];

export const OrderbookWidget: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => OrderbookWidgetStyles(theme), [theme]);

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
