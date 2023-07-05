import React from "react";
import { View, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import { getYForX, Vector } from "react-native-redash";
import { IKline } from "../../api/types";

import { buildGraph } from "./model";

const CURSOR = 50;

interface CursorProps {
    translation: Vector<Animated.SharedValue<number>>;
    klineHistory: IKline[];
}

const Cursor = ({ klineHistory, translation }: CursorProps) => {
    const graphs = {
        label: "1H",
        value: 0,
        data: buildGraph(klineHistory, "Last Hour"),
    };

    const isActive = useSharedValue(false);
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: () => {
            isActive.value = true;
        },
        onActive: (event) => {
            translation.x.value = event.x;
            translation.y.value = getYForX(graphs?.data.path, translation.x.value) || 0;
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

    return (
        <View style={StyleSheet.absoluteFill}>
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
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: "black",
    },
});
