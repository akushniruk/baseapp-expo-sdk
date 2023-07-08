import { Line } from "react-native-svg";
import { SIZE } from "./model";
import { getPalette } from "../../../../shared/libs/getPalette";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";

export const grid = () => {
    const gridSize = 70; // Size of the grid squares
    const { theme } = useThemeContext();
    const gridColor = getPalette(theme).Controls["divider-color"][10].value; // Color of the grid lines

    const gridLines = [];
    for (let i = 0; i <= SIZE; i += gridSize) {
        gridLines.push(
            <Line key={i} x1={i} y1={0} x2={i} y2={SIZE + 20} stroke={gridColor} strokeWidth={1} strokeOpacity={0.5} />
        );
        gridLines.push(
            <Line
                key={i + SIZE}
                x1={0}
                y1={i}
                x2={SIZE}
                y2={i}
                stroke={gridColor}
                strokeWidth={1}
                strokeOpacity={0.5}
            />
        );
    }
    return gridLines;
};
