import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { orderFormStyles } from "./orderForm.styles";
import { Button, InputV2, useAppDispatch, useAppSelector } from "../../../../shared";
import { IOrderSide, IOrderType } from "../../api/types";
import { SelectIcon } from "../../../../assets/system/selector";
import { getTotalPrice } from "../../libs/helpers/getTotalPrice";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Tickers } from "../../../tickers/model/type";
import { Market } from "../../../markets/model/type";
import { setCurrentMarket } from "../../../markets/model/marketsSlice";
import { IAccount } from "../../../wallets/api/types";
import { getAccount } from "../../libs/helpers/getAccount";
import { useGetAccountsQuery } from "../../../wallets/api/accountApi";
import { Modal } from "../../../../shared/ui/modal";
import BottomSheet from "@gorhom/bottom-sheet";
import { useCreateOrderMutation } from "../../api/order";

interface IOrderForm {
    marketId: string;
}

interface IOrderFormValues {
    amount: string;
    total: string;
    price?: string;
    trigger_price?: string;
}

const TRIGGER_BUY_PRICE_MULT = 1.1;
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

export const OrderForm: FC<IOrderForm> = ({ marketId }: IOrderForm) => {
    useGetAccountsQuery();
    const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();

    const dispatch = useAppDispatch();
    const { theme } = useThemeContext();
    const styles = useMemo(() => orderFormStyles(theme), [theme]);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const [isOpenOrderTypeSelector, setIsOpenOrderTypeSelector] = useState<boolean>(false);
    const [orderType, setOrderType] = useState<IOrderType>("limit");
    const [side, setSide] = useState<IOrderSide>("buy");
    const [newOrder, setNewOrder] = useState<IOrderFormValues>({
        amount: "",
        total: "",
        price: "",
        trigger_price: "",
    });

    const accounts: IAccount[] | null = useAppSelector((state: RootState) => state.accounts.list);
    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);
    const markets = useAppSelector((state: RootState) => state.markets.markets);
    const currentMarket: Market | undefined = useAppSelector((state: RootState) => state.markets.currentMarket);
    const asks = useAppSelector((state: RootState) => state.orderbook.asks);
    const bids = useAppSelector((state: RootState) => state.orderbook.bids);

    const accountForBase = useMemo(
        () => (currentMarket ? getAccount(currentMarket?.base_unit, accounts) : null),
        [currentMarket, accounts]
    );
    const accountForQuote = useMemo(
        () => (currentMarket ? getAccount(currentMarket?.quote_unit, accounts) : null),
        [currentMarket, accounts]
    );

    useEffect(() => {
        if (markets.length) {
            dispatch(setCurrentMarket(markets[0]));
        }
    }, [markets]);

    const handleSetOrderType = (orderType: IOrderType) => {
        setOrderType(orderType as IOrderType);
        bottomSheetRef?.current?.forceClose();
        setIsOpenOrderTypeSelector(false);
    };

    const handleStateChange = useCallback(
        (key: string, value: string) => {
            setNewOrder((prevState: IOrderFormValues) => ({
                ...prevState,
                [key]: value,
            }));
        },
        [setNewOrder]
    );

    const getTotal = () => {
        const safeAmount = newOrder?.amount ? +newOrder.amount : 0;
        const proposals = side === "buy" ? asks : bids;
        const priceMarket = tickers && currentMarket ? tickers[currentMarket?.id]?.last : 0;
        const totalPrice = getTotalPrice(String(safeAmount), +priceMarket, proposals);

        if (orderType === "market") {
            return totalPrice;
        } else if ((orderType as string).toLowerCase().includes("limit")) {
            return safeAmount * (Number(newOrder?.price) || 0);
        } else if (side === "buy") {
            return TRIGGER_BUY_PRICE_MULT * safeAmount * (Number(newOrder?.trigger_price) || 0);
        } else {
            return safeAmount * (Number(newOrder?.trigger_price) || 0);
        }
    };

    const renderOrderTypeSelector = () => {
        return (
            <>
                <Text style={styles.orderLabel}>order</Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.orderSelector,
                        {
                            backgroundColor: pressed
                                ? styles.orderSelectorPressed.backgroundColor
                                : styles.orderSelector.backgroundColor,
                        },
                    ]}
                    onPress={() => setIsOpenOrderTypeSelector(true)}
                >
                    <Text style={styles.orderSelectorText}>{orderType}</Text>
                    <SelectIcon width={18} />
                </Pressable>
            </>
        );
    };

    const renderPriceInputByType = () => {
        switch (orderType) {
            case "limit":
                return (
                    <InputV2
                        value={newOrder?.price || ""}
                        onChangeText={(text: string) => handleStateChange("price", text)}
                        placeholder="Price"
                        label="price"
                        symbol={accountForQuote?.currency?.toUpperCase() || ""}
                    />
                );
            case "stop_loss":
            case "take_profit":
                return (
                    <InputV2
                        value={newOrder?.trigger_price || ""}
                        onChangeText={(text: string) => handleStateChange("trigger_price", text)}
                        placeholder="trigger_price"
                        label={orderType === "stop_loss" ? "Stop price" : "Take price"}
                        symbol={accountForQuote?.currency?.toUpperCase() || ""}
                        keyboardType="numeric"
                    />
                );
            case "stop_limit":
            case "take_limit":
                return (
                    <View>
                        <View>
                            <InputV2
                                value={newOrder?.trigger_price || ""}
                                onChangeText={(text: string) => handleStateChange("trigger_price", text)}
                                placeholder="trigger_price"
                                label={orderType === "stop_limit" ? "Stop price" : "Take price"}
                                symbol={accountForQuote?.currency?.toUpperCase() || ""}
                                keyboardType="numeric"
                            />
                        </View>
                        <View>
                            <InputV2
                                value={newOrder?.price || ""}
                                onChangeText={(text: string) => handleStateChange("price", text)}
                                keyboardType="numeric"
                                placeholder="Price"
                                label="price"
                                symbol={accountForQuote?.currency?.toUpperCase() || ""}
                            />
                        </View>
                    </View>
                );
            case "market":
                const proposals = side === "buy" ? asks : bids;
                const priceMarket = tickers && currentMarket ? tickers[currentMarket?.id]?.last : 0;
                const totalPrice = newOrder?.amount && getTotalPrice(newOrder.amount, +priceMarket, proposals);

                const safePrice = +totalPrice / Number(newOrder?.amount) || priceMarket;

                if (
                    (totalPrice && newOrder?.total && +totalPrice !== +newOrder?.total) ||
                    (!newOrder?.total && totalPrice)
                ) {
                    handleStateChange("total", totalPrice?.toString() || "");
                }

                if (
                    (safePrice && newOrder?.price && +safePrice !== +newOrder?.price) ||
                    (!newOrder?.price && safePrice)
                ) {
                    handleStateChange("price", safePrice?.toString() || "");
                }

                return (
                    <InputV2
                        value={`≈${newOrder?.price}`}
                        editable={false}
                        placeholder="Price"
                        label="price"
                        symbol={accountForQuote?.currency?.toUpperCase() || ""}
                    />
                );
            default:
                return null;
        }
    };

    const getAvailable = (account: IAccount) => {
        return account?.balance ? +account.balance : 0;
    };

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

    const handleCreateOrder = () => {
        if (!currentMarket) {
            return null;
        }

        if (["stop_limit", "take_limit"].includes(orderType)) {
            createOrder({
                market: currentMarket.id,
                side: side,
                amount: newOrder.amount,
                price: newOrder.price,
                trigger_price: newOrder.trigger_price,
                type: orderType,
            });
        }

        if (["stop_loss", "take_profit"].includes(orderType)) {
            createOrder({
                market: currentMarket.id,
                side: side,
                amount: newOrder.amount,
                trigger_price: newOrder.trigger_price,
                type: orderType,
            });
        }

        if (["limit", "market"].includes(orderType)) {
            createOrder({
                market: currentMarket.id,
                side: side,
                amount: newOrder.amount,
                price: newOrder.price,
                type: orderType,
            });
        }
    };

    if (!currentMarket) {
        return <Text>Please, select market</Text>;
    }

    if (!markets.length) {
        return <Text>Please, contact support</Text>;
    }

    return (
        <View>
            <View style={styles.formContainer}>
                <View style={styles.headerContainer}>
                    <Pressable style={styles.orderTypeButton}>
                        <Text>Spot</Text>
                    </Pressable>
                    <View style={styles.typeButtons}>
                        <Pressable style={styles.buttonBuy} onPress={() => setSide("buy")}>
                            <Text>Buy</Text>
                        </Pressable>
                        <Pressable style={styles.buttonSell} onPress={() => setSide("sell")}>
                            <Text>Sell</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    {renderOrderTypeSelector()}
                    {renderPriceInputByType()}
                    <View>
                        <View>
                            <Text>↑{bids.length ? bids[0][0] : 0}</Text>
                        </View>
                        <View>
                            <Text>↓{asks.length ? asks[0][0] : 0}</Text>
                        </View>
                    </View>
                    <InputV2
                        value={newOrder?.amount || ""}
                        onChangeText={(text: string) => handleStateChange("amount", text)}
                        keyboardType="numeric"
                        placeholder="Amount"
                        label="amount"
                        symbol={accountForBase?.currency?.toUpperCase() || ""}
                    />
                    {/* <InputV2
                        value={newOrder?.total || ""}
                        onChangeText={(text: string) => handleStateChange("total", text)}
                        keyboardType="numeric"
                        placeholder="Total"
                        label="total"
                        symbol={accountForQuote?.currency?.toUpperCase() || ""}
                    /> */}
                    <View>
                        <Text>Total</Text>
                        <Text>
                            {getTotal()}{" "}
                            {side === "buy" ? accountForQuote?.currency?.toUpperCase() : accountForBase?.currency}
                        </Text>
                    </View>
                    <View>
                        <Text>Available</Text>
                        <View>
                            <Text>
                                {accountForBase && accountForQuote
                                    ? getAvailable(side === "buy" ? accountForQuote : accountForBase)
                                    : 0}
                            </Text>
                            <Text>
                                {side === "buy" ? accountForQuote?.currency?.toUpperCase() : accountForBase?.currency}
                            </Text>
                        </View>
                    </View>
                    <Button
                        onPress={handleCreateOrder}
                        title={side === "buy" ? "Buy" : "Sell"}
                        isLoading={isLoading}
                        disabled={isLoading}
                    ></Button>
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
        </View>
    );
};
