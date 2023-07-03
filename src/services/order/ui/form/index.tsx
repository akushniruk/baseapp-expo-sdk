import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
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
import { useCreateOrderMutation } from "../../api/order";

interface IOrderFormProps {
    orderType: IOrderType;
    setIsOpenOrderTypeSelector: (value: boolean) => void;
}

interface IOrderFormValues {
    amount: string;
    total: string;
    price?: string;
    trigger_price?: string;
}

const TRIGGER_BUY_PRICE_MULT = 1.1;

export const OrderForm: FC<IOrderFormProps> = ({ orderType, setIsOpenOrderTypeSelector }: IOrderFormProps) => {
    useGetAccountsQuery();
    const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();

    const dispatch = useAppDispatch();
    const { theme } = useThemeContext();
    const styles = useMemo(() => orderFormStyles(theme), [theme]);

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
        } else if ((orderType as string).toLowerCase()?.includes("limit")) {
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
                    <SelectIcon color={styles.orderSelectorText.color} width={18} />
                </Pressable>
            </>
        );
    };

    const renderPriceInputByType = () => {
        switch (orderType) {
            case "limit":
                return (
                    <View style={styles.inputWrapper}>
                        <InputV2
                            value={newOrder?.price || ""}
                            onChangeText={(text: string) => handleStateChange("price", text)}
                            placeholder="Price"
                            label="price"
                            symbol={currentMarket?.quote_unit?.toUpperCase() || ""}
                        />
                    </View>
                );
            case "stop_loss":
            case "take_profit":
                return (
                    <View style={styles.inputWrapper}>
                        <InputV2
                            value={newOrder?.trigger_price || ""}
                            onChangeText={(text: string) => handleStateChange("trigger_price", text)}
                            placeholder="trigger_price"
                            label={orderType === "stop_loss" ? "Stop price" : "Take price"}
                            symbol={currentMarket?.quote_unit?.toUpperCase() || ""}
                            keyboardType="numeric"
                        />
                    </View>
                );
            case "stop_limit":
            case "take_limit":
                return (
                    <View>
                        <View style={styles.inputWrapper}>
                            <InputV2
                                value={newOrder?.trigger_price || ""}
                                onChangeText={(text: string) => handleStateChange("trigger_price", text)}
                                placeholder="trigger_price"
                                label={orderType === "stop_limit" ? "Stop price" : "Take price"}
                                symbol={currentMarket?.quote_unit?.toUpperCase() || ""}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <InputV2
                                value={newOrder?.price || ""}
                                onChangeText={(text: string) => handleStateChange("price", text)}
                                keyboardType="numeric"
                                placeholder="Price"
                                label="price"
                                symbol={currentMarket?.quote_unit?.toUpperCase() || ""}
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
                    <View style={styles.inputWrapper}>
                        <InputV2
                            value={`≈${newOrder?.price}`}
                            editable={false}
                            placeholder="Price"
                            label="price"
                            symbol={currentMarket?.quote_unit?.toUpperCase() || ""}
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    const getAvailable = (account: IAccount) => {
        return account?.balance ? +account.balance : 0;
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

    const customButtonBidStyles = {
        button: styles.button,
        active: styles.buttonBidActive,
        title: styles.buttonTitle,
    };

    const customButtonAskStyles = {
        button: styles.button,
        active: styles.buttonAskActive,
        title: styles.buttonTitle,
    };

    if (!currentMarket) {
        return <Text>Please, select market</Text>;
    }

    if (!markets.length) {
        return <Text>Please, contact support</Text>;
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.headerContainer}>
                <Pressable style={styles.marketTypeButton}>
                    <Text style={styles.marketTypeButtonText}>Spot</Text>
                </Pressable>
                <View style={styles.typeButtons}>
                    <Pressable
                        style={[styles.buttonBuy, side === "buy" && styles.buttonBuyActive]}
                        onPress={() => setSide("buy")}
                    >
                        <Text
                            style={{
                                color: side === "buy" ? styles.buttonBuyActive.color : styles.buttonBuy.color,
                            }}
                        >
                            Buy
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[styles.buttonSell, side === "sell" && styles.buttonSellActive]}
                        onPress={() => setSide("sell")}
                    >
                        <Text
                            style={{
                                color: side === "sell" ? styles.buttonSellActive.color : styles.buttonSell.color,
                            }}
                        >
                            Sell
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                {renderOrderTypeSelector()}
                {renderPriceInputByType()}
                <View style={styles.bestPrices}>
                    <View>
                        <Text style={styles.bestPriceBid}>↑{bids.length ? bids[0][0] : 0}</Text>
                    </View>
                    <View>
                        <Text style={styles.bestPriceAsk}>↓{asks.length ? asks[0][0] : 0}</Text>
                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <InputV2
                        value={newOrder?.amount || ""}
                        onChangeText={(text: string) => handleStateChange("amount", text)}
                        keyboardType="numeric"
                        placeholder="Amount"
                        label="amount"
                        symbol={currentMarket.base_unit?.toUpperCase() || ""}
                    />
                </View>

                <View></View>
                {/* <InputV2
                        value={newOrder?.total || ""}
                        onChangeText={(text: string) => handleStateChange("total", text)}
                        keyboardType="numeric"
                        placeholder="Total"
                        label="total"
                        symbol={currentMarket?.quote_unit?.toUpperCase() || ""}
                    /> */}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <View style={styles.containerValues}>
                        <Text style={styles.valueText}>{getTotal()} </Text>
                        <Text style={styles.codeText}>
                            {side === "buy"
                                ? currentMarket?.quote_unit?.toUpperCase()
                                : currentMarket.base_unit?.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={styles.availableContainer}>
                    <Text style={styles.availableText}>Available</Text>
                    <View style={styles.containerValues}>
                        <Text style={styles.valueAvailableText}>
                            {accountForBase && accountForQuote
                                ? getAvailable(side === "buy" ? accountForQuote : accountForBase)
                                : 0}{" "}
                        </Text>
                        <Text style={styles.codeAvailableText}>
                            {side === "buy"
                                ? currentMarket?.quote_unit?.toUpperCase()
                                : currentMarket.base_unit?.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <Button
                    customStyles={side === "buy" ? customButtonBidStyles : customButtonAskStyles}
                    onPress={handleCreateOrder}
                    title={side === "buy" ? "Buy" : "Sell"}
                    isLoading={isLoading}
                    disabled={isLoading}
                ></Button>
            </View>
        </View>
    );
};
