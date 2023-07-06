import React, { FC, useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Defs, Line, LinearGradient, Path, Stop } from "react-native-svg";
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { TouchableWithoutFeedback, LongPressGestureHandler, State } from "react-native-gesture-handler";
import { mixPath, useVector } from "react-native-redash";
import { buildGraph, PeriodIndex, PERIODS, SIZE } from "./model";
import Cursor from "./cursor";
import { IKline } from "../../api/types";
import Header from "./header";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { graphStyles } from "./graph.styles";

interface IGraphProps {
    klineHistory: IKline[];
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const SELECTION_WIDTH = SIZE;
const BUTTON_WIDTH = SELECTION_WIDTH / PERIODS.length;

const Graph: FC<IGraphProps> = ({ klineHistory }: IGraphProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => graphStyles(theme), [theme]);

    const data = buildGraph(klineHistory);
    const [isCursorActive, setIsCursorActive] = React.useState(false);

    const translation = useVector();
    const transition = useSharedValue(0);
    const previous = useSharedValue<PeriodIndex>(0);
    const current = useSharedValue<PeriodIndex>(0);

    const animatedProps = useAnimatedProps(() => {
        const previousPath = data.path;
        const currentPath = data.path;
        const newPath = mixPath(transition.value, previousPath, currentPath);
        // const pathValue = newPath.replace("M", "L");
        // const gradientD = pathValue.length > 0 ? `M 0,${SIZE} C 0,0 0,0 0,0 ${pathValue} L ${SIZE},${SIZE}` : "";

        return {
            d: newPath,
        };
    });

    const handleLongPress = (event: any) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            setIsCursorActive(true);
        }
    };

    const style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(BUTTON_WIDTH * current.value) }],
        };
    });

    const renderYAxisValues = (value: number, index: number) => {
        return <Text key={index}>{value.toFixed(4)}</Text>;
    };

    const renderXAxisValues = (value: number, index: number) => {
        const date = new Date(value);

        // Format the date
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();
        const formattedDate = `${day} ${month}`;

        // Format the time
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");

        const formattedTime = `${hours}:${minutes}`;

        return (
            <Text key={index}>
                {formattedDate} {formattedTime}
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.selection}>
                <View style={StyleSheet.absoluteFill}>
                    <Animated.View style={[styles.backgroundSelection, style]} />
                </View>
                {PERIODS.map((period, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={period.label}
                            onPress={() => {
                                previous.value = current.value;
                                transition.value = 0;
                                current.value = index as PeriodIndex;
                                transition.value = withTiming(1);
                            }}
                        >
                            <Animated.View style={[styles.labelContainer]}>
                                <Text style={styles.label}>{period.label}</Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
            <Header klineHistory={klineHistory} translation={translation} />
            <View style={styles.graphContainer}>
                <View>
                    <LongPressGestureHandler onHandlerStateChange={handleLongPress} minDurationMs={1000}>
                        <View>
                            <Svg style={{ position: "relative" }} width={SIZE} height={SIZE + 20}>
                                <AnimatedPath
                                    animatedProps={animatedProps}
                                    fill="url(#gradient)"
                                    stroke={styles.line.color}
                                    strokeWidth={2}
                                />
                                <Defs>
                                    <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <Stop offset="0%" stopColor={styles.linearGradientTop.color} stopOpacity="1" />
                                        <Stop
                                            offset="100%"
                                            stopColor={styles.linearGradientBottom.color}
                                            stopOpacity="0"
                                        />
                                    </LinearGradient>
                                </Defs>
                                <Line x1={SIZE} y1={0} x2={SIZE} y2={SIZE + 20} stroke="gray" strokeWidth={1} />
                                <View
                                    style={{
                                        position: "absolute",
                                        right: -50,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: SIZE,
                                    }}
                                >
                                    {data?.yAxisValues.map(renderYAxisValues)}
                                </View>
                            </Svg>

                            {isCursorActive ? <Cursor klineHistory={klineHistory} translation={translation} /> : null}
                        </View>
                    </LongPressGestureHandler>
                </View>
                <View style={styles.xAxisContainer}>
                    <Svg width={SIZE} height={5}>
                        <Path d={`M0 0 L${SIZE} 0`} stroke="gray" strokeWidth={1} />
                    </Svg>
                </View>
                <View style={styles.xAxisValuesContainer}>{data.xAxisValues.map(renderXAxisValues)}</View>
            </View>
        </View>
    );
};

export default Graph;
