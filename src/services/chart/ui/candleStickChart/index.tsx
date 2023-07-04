import React from "react";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { clamp } from "react-native-redash";

import Chart from "./chart";
import Line from "./line";
import Label from "./label";
import { SIZE, STEP } from "./chartHelpers";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});

export const CandleStickChart = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler({
        onActive: ({ x, y }) => {
            opacity.value = 1;
            translateY.value = clamp(y, 0, SIZE);
            translateX.value = x - (x % STEP) + STEP / 2;
        },
        onEnd: () => {
            opacity.value = 0;
        },
    });
    const horizontal = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));
    const vertical = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }],
    }));
    return (
        <View style={styles.container}>
            <View>
                <Chart />
                <PanGestureHandler minDist={0} {...{ onGestureEvent }}>
                    <Animated.View style={StyleSheet.absoluteFill}>
                        <Animated.View style={[StyleSheet.absoluteFill, horizontal]}>
                            <Line x={SIZE} y={0} />
                        </Animated.View>
                        <Animated.View style={[StyleSheet.absoluteFill, vertical]}>
                            <Line x={0} y={SIZE} />
                        </Animated.View>
                        <Label {...{ translateY, opacity }} />
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </View>
    );
};
