import React, { FC, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { OrderForm } from "../../../services/order/ui/form";
import { SceneRendererProps } from "react-native-tab-view";
import { OrderbookWidget } from "../../orderbook/ui/orderbook";
import { Trades } from "../../../services/trades/ui/trades";
import { IRoute, TabPanel } from "../../../shared";
import { Modal } from "../../../shared/ui/modal";
import BottomSheet from "@gorhom/bottom-sheet";
import { IOrderType } from "../../../services/order/api/types";
import { Pressable, Text } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { orderFormStyles } from "../../../services/order/ui/form/orderForm.styles";

const renderScene = (props: SceneRendererProps & { route: any }) => {
    switch (props.route.key) {
        case "orderbook":
            return <OrderbookWidget />;
        case "trades":
            return <Trades />;
        default:
            return null;
    }
};

const ORDER_TYPES = [
    {
        key: "limit",
        value: "Limit",
    },
    {
        key: "market",
        value: "Market",
    },
    {
        key: "stop_loss",
        value: "Stop loss",
    },
    {
        key: "stop_limit",
        value: "Stop limit",
    },
    {
        key: "take_profit",
        value: "Take profit",
    },
    {
        key: "take_limit",
        value: "Take limit",
    },
];

export const OrderWidget: FC = () => {
    const { theme } = useThemeContext();

    // FIXME: move to styles
    const styles = useMemo(() => orderFormStyles(theme), [theme]);

    const [orderType, setOrderType] = useState<IOrderType>("limit");
    const [isOpenOrderTypeSelector, setIsOpenOrderTypeSelector] = useState<boolean>(false);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [routes] = useState<IRoute[]>([
        { key: "orderbook", title: "Order Book" },
        { key: "trades", title: "Trades" },
    ]);

    const renderOrderType = (orderType: typeof ORDER_TYPES[0]) => {
        return (
            <Pressable
                key={orderType.key}
                style={({ pressed }) => [
                    styles.orderType,
                    {
                        backgroundColor: pressed
                            ? styles.orderTypePressed.backgroundColor
                            : styles.orderType.backgroundColor,
                    },
                ]}
                onPress={() => handleSetOrderType(orderType.key as IOrderType)}
            >
                <Text style={styles.orderTypeText}>{orderType.value}</Text>
            </Pressable>
        );
    };

    const handleSetOrderType = (orderType: IOrderType) => {
        setOrderType(orderType as IOrderType);
        bottomSheetRef?.current?.forceClose();
        setIsOpenOrderTypeSelector(false);
    };

    return (
        <>
            <View style={{ height: "100%" }}>
                <OrderForm orderType={orderType} setIsOpenOrderTypeSelector={setIsOpenOrderTypeSelector} />
                <View style={{ paddingHorizontal: 12 }}>
                    <TabPanel
                        currentTabIndex={tabIndex}
                        renderScene={(props: SceneRendererProps & { route: any }) => renderScene(props)}
                        routes={routes}
                        onCurrentTabChange={setTabIndex}
                    />
                </View>
            </View>
            <Modal
                snapPoints={["60%"]}
                bottomSheetRef={bottomSheetRef}
                isOpen={isOpenOrderTypeSelector}
                setIsOpen={setIsOpenOrderTypeSelector}
            >
                <View style={styles.orderTypesContainer}>{ORDER_TYPES.map(renderOrderType)}</View>
            </Modal>
        </>
    );
};
