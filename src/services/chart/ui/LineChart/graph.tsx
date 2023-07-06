import React, { FC, useMemo } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Svg, { Defs, Line, LinearGradient, Path, Stop } from "react-native-svg";
import Animated, { useAnimatedProps, useSharedValue } from "react-native-reanimated";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";
import { mixPath, useVector } from "react-native-redash";
import { buildGraph, SIZE } from "./model";
import Cursor from "./cursor";
import { IKline } from "../../api/types";
import Header from "./header";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { graphStyles } from "./graph.styles";
import { getPalette } from "../../../../shared/libs/getPalette";

interface IGraphProps {
    klineHistory: IKline[];
    isLoading: boolean;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Graph: FC<IGraphProps> = ({ klineHistory, isLoading }: IGraphProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => graphStyles(theme), [theme]);

    const data = buildGraph(klineHistory);
    const [isCursorActive, setIsCursorActive] = React.useState(false);

    const translation = useVector();
    const transition = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        const previousPath = data.path;
        const currentPath = data.path;
        const newPath = mixPath(transition.value, previousPath, currentPath);
        const pathValue = newPath.replace("M", "L");
        const gradientD = pathValue.length > 0 ? `M 0,${SIZE} C 0,0 0,0 0,0 ${pathValue} L ${SIZE},${SIZE}` : "";

        return {
            d: gradientD,
        };
    });

    const handleLongPress = (event: any) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            setIsCursorActive(true);
        }
    };

    const renderYAxisValues = (value: number, index: number) => {
        return <Text key={index}>{value.toFixed(4)}</Text>;
    };

    const renderXAxisValues = (value: number, index: number) => {
        const date = new Date(value);

        // Format the date
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
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

    const renderLoader = () => {
        return (
            <View
                style={{ width: SIZE, height: SIZE, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Text>
                    <ActivityIndicator color={`${getPalette(theme).Controls["primary-cta-layer-color"][60].value}`} />
                </Text>
            </View>
        );
    };

    const renderChart = () => {
        return (
            <View>
                <LongPressGestureHandler onHandlerStateChange={handleLongPress} minDurationMs={800}>
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
                                    <Stop offset="100%" stopColor={styles.linearGradientBottom.color} stopOpacity="0" />
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
        );
    };

    return (
        <View style={styles.container}>
            <Header klineHistory={klineHistory} translation={translation} />
            <View style={styles.graphContainer}>
                {isLoading ? renderLoader() : renderChart()}
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
