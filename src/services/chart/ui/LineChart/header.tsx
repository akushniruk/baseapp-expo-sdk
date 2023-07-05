import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { ReText, Vector, round } from "react-native-redash";

import { SIZE, buildGraph } from "./model";

import { IKline } from "../../api/types";
import { convertTimestampToDate } from "../../../../shared/libs/formatDate";

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    values: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    value: {
        fontWeight: "500",
        fontSize: 24,
    },
    label: {
        fontSize: 18,
    },
});

interface HeaderProps {
    translation: Vector<Animated.SharedValue<number>>;
    klineHistory: IKline[];
}

const Header = ({ klineHistory, translation }: HeaderProps) => {
    const graphs = {
        label: "1H",
        value: 0,
        data: buildGraph(klineHistory, "Last Hour"),
    };

    const data = useDerivedValue(() => graphs?.data);
    const price = useDerivedValue(() => {
        const p = interpolate(translation.y.value, [0, SIZE], [data.value?.maxPrice, data.value?.minPrice]);
        return `$ ${round(p, 2).toLocaleString("en-US", { currency: "USD" })}`;
    });

    const dates = useDerivedValue(() => {
        const p = interpolate(translation.x.value, [0, SIZE], [data.value?.minDate, data.value?.maxDate]);

        const date = new Date(p); // Multiply by 1000 to convert from seconds to milliseconds

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    });

    return (
        <View style={styles.container}>
            <View style={styles.values}>
                <View>
                    <ReText style={styles.value} text={price} />
                    <Text style={styles.label}>Market: BTCZAR</Text>
                </View>
                <View>
                    <ReText style={styles.value} text={dates} />
                </View>
            </View>
        </View>
    );
};

export default Header;
