import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { mixPath, useVector } from "react-native-redash";

// import { GraphIndex, graphs, SIZE } from "./model";
import { buildGraph, SIZE } from "./model";
// import Header from "./header";
import Cursor from "./cursor";
import { IKline } from "../../api/types";
import Header from "./header";

interface IGraphProps {
    klineHistory: IKline[];
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const SELECTION_WIDTH = SIZE - 32;

const Graph: FC<IGraphProps> = ({ klineHistory }: IGraphProps) => {
    const graphs = {
        label: "1H",
        value: 0,
        data: buildGraph(klineHistory, "Last Hour"),
    };

    const translation = useVector();
    const transition = useSharedValue(0);
    const previous = useSharedValue(0);
    const current = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        const previousPath = graphs.data.path;
        const currentPath = graphs.data.path;
        const newPath = mixPath(transition.value, previousPath, currentPath);
        const pathValue = newPath.replace("M", "L");
        const gradientD = pathValue.length > 0 ? `M 0,${SIZE} C 0,0 0,0 0,0 ${pathValue} L ${SIZE},${SIZE}` : "";

        return {
            d: gradientD,
        };
    });

    const style = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(20 * current.value) }],
    }));

    return (
        <View style={styles.container}>
            <Header klineHistory={klineHistory} translation={translation} />
            <View style={styles.graphContainer}>
                <View>
                    <Svg width={SIZE} height={SIZE}>
                        <AnimatedPath
                            animatedProps={animatedProps}
                            fill="url(#gradient)"
                            stroke="#FCD000"
                            strokeWidth={2}
                        />
                        <Defs>
                            <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <Stop offset="0%" stopColor="#FCD000" stopOpacity="1" />
                                <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                            </LinearGradient>
                        </Defs>
                    </Svg>
                    <Cursor klineHistory={klineHistory} translation={translation} />
                </View>
                <View style={styles.xAxisContainer}>
                    <Svg width={SIZE} height={5}>
                        <Path d={`M0 0 L${SIZE} 0`} stroke="gray" strokeWidth={1} />
                    </Svg>
                    <Text>{graphs.data.minDate}</Text>
                    <Text>{graphs.data.maxDate}</Text>
                </View>
            </View>
            <View style={styles.selection}>
                <View style={StyleSheet.absoluteFill}>
                    <Animated.View style={[styles.backgroundSelection, style]} />
                </View>
                {/* {graphs.map((graph, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={graph.label}
                            onPress={() => {
                                previous.value = current.value;
                                transition.value = 0;
                                current.value = index as GraphIndex;
                                transition.value = withTiming(1);
                            }}
                        >
                            <Animated.View style={[styles.labelContainer]}>
                                <Text style={styles.label}>{graph.label}</Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    );
                })} */}
            </View>
        </View>
    );
};

export default Graph;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    graphContainer: {
        position: "relative",
    },
    backgroundSelection: {
        backgroundColor: "#f3f3f3",
        ...StyleSheet.absoluteFillObject,
        width: 20,
        borderRadius: 8,
    },
    selection: {
        flexDirection: "row",
        width: SELECTION_WIDTH,
        alignSelf: "center",
    },
    labelContainer: {
        padding: 16,
        width: 20,
    },
    label: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    xAxisContainer: {
        position: "absolute",
        bottom: -40,
    },
});
