import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { interpolate, useDerivedValue } from "react-native-reanimated";
import { ReText, Vector } from "react-native-redash";
import { IGraph, SIZE } from "./model";

const styles = StyleSheet.create({
    container: {
        paddingBottom: 12,
    },
    values: {
        flexDirection: "row",
        justifyContent: "center",
    },
    value: {
        fontWeight: "500",
        fontSize: 14,
    },
});

interface HeaderProps {
    translation: Vector<Animated.SharedValue<number>>;
    data: IGraph;
}

const Header = ({ data, translation }: HeaderProps) => {
    const derivedData = useDerivedValue(() => data);

    const dates = useDerivedValue(() => {
        const p = interpolate(translation.x.value, [0, SIZE], [derivedData.value?.minDate, derivedData.value?.maxDate]);

        const date = new Date(p);

        // Format the date
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        // Format the time
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");

        const formattedTime = `${hours}:${minutes}`;

        // Return the formatted timestamp
        return `${formattedDate} at ${formattedTime}`;
    });

    return (
        <View style={styles.container}>
            <View style={styles.values}>
                <View>
                    <ReText style={styles.value} text={dates} />
                </View>
            </View>
        </View>
    );
};

export default Header;
