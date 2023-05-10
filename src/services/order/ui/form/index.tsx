import React, { FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { orderFormStyles } from "./orderForm.styles";
import { OrderType, OrderResolver, orderSchema } from "../../libs/schema";
import { Button, InputV2 } from "../../../../shared";

interface IOrderForm {
    marketId: string;
}

export const OrderForm: FC<IOrderForm> = ({ marketId }: IOrderForm) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => orderFormStyles(theme), [theme]);

    const {
        control,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        // Warning: onChange can bring issue with performance
        mode: "onChange",
        resolver: OrderResolver,
    });

    const [type, setType] = useState<string>("buy");

    const onSubmitHandler: SubmitHandler<OrderType> = (data) => console.log("test", data);

    return (
        <>
            <View style={styles.headerContainer}>
                <Pressable style={styles.orderTypeButton}>
                    <Text>Spot</Text>
                </Pressable>
                <View style={styles.typeButtons}>
                    <Pressable style={styles.buttonBuy} onPress={() => setType("buy")}>
                        <Text>Buy</Text>
                    </Pressable>
                    <Pressable style={styles.buttonSell} onPress={() => setType("sell")}>
                        <Text>Sell</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.balanceLabel}>Balance for trading -- symbol</Text>
                <Text>Order type limit/market+adv orders</Text>
                <InputV2 value="" placeholder="Price" label="price" symbol="USDT" />
                <InputV2 value="" placeholder="Amount" label="amount" symbol="USDT" />
                <InputV2 value="" placeholder="Total" label="total" symbol="USDT" />
                <Button title={type === "buy" ? "Buy" : "Sell"} isLoading={false}></Button>
            </View>
        </>
    );
};

// {
//     "market": "linkusdt",
//     "side": "sell",
//     "amount": "1",
//     "price": "10",
//     "type": "limit"
// }
