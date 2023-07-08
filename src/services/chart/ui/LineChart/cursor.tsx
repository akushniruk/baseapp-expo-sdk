import React from "react";
import { View, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useDerivedValue,
    interpolate,
} from "react-native-reanimated";
import { getYForX, ReText, round, Vector } from "react-native-redash";
import { IGraph, SIZE, buildGraph } from "./model";

const CURSOR = 18;

interface CursorProps {
    translation: Vector<Animated.SharedValue<number>>;
    data: IGraph;
}

const Cursor = ({ data, translation }: CursorProps) => {
    const isActive = useSharedValue(false);

    const price = useDerivedValue(() => {
        const p = interpolate(translation.y.value, [0, SIZE], [data?.maxPrice, data?.minPrice]);
        return `$ ${round(p, 2).toLocaleString("en-US", { currency: "USD" })}`;
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: () => {
            isActive.value = true;
        },
        onActive: (event) => {
            const xValue = event.x < 0 ? 0 : event.x > 320 ? 320 : event.x;
            translation.x.value = xValue;
            translation.y.value = getYForX(data?.path, translation.x.value) || 0;
        },
        onEnd: () => {
            isActive.value = false;
        },
    });

    const style = useAnimatedStyle(() => {
        const translateX = translation.x.value - CURSOR / 2;
        const translateY = translation.y.value - CURSOR / 2;

        return {
            transform: [{ translateX }, { translateY }, { scale: withSpring(isActive.value ? 1 : 0) }],
        };
    });

    const stylePrice = useAnimatedStyle(() => {
        const translateY = translation.y.value - CURSOR / 2;

        return {
            transform: [{ translateX: 0 }, { translateY }, { scale: withSpring(isActive.value ? 1 : 0) }],
        };
    });

    return (
        <View style={StyleSheet.absoluteFill}>
            <Animated.View style={[styles.price, stylePrice]}>
                <ReText style={styles.priceValue} text={price} />
            </Animated.View>
            <PanGestureHandler {...{ onGestureEvent }}>
                <Animated.View style={StyleSheet.absoluteFill}>
                    <Animated.View style={[styles.cursor, style]}>
                        <View style={styles.cursorBody} />
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

export default Cursor;

// TODO: FIX STYLES
const styles = StyleSheet.create({
    cursor: {
        width: CURSOR,
        height: CURSOR,
        borderRadius: CURSOR / 2,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        alignItems: "center",
    },
    cursorBody: {
        width: 9,
        height: 9,
        borderRadius: 7.5,
        backgroundColor: "black",
    },
    price: {
        position: "absolute",
        right: 0,
        backgroundColor: "#FCD000",
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: "black",
    },
    priceValue: {
        fontSize: 12,
    },
});
