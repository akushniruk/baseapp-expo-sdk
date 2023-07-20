import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const Warning: FC<IconProps> = ({ color, width, height }: IconProps) => {
    return (
        <Svg width={width || 22} height={height || 19} viewBox="0 0 22 19" fill="none">
            <Path d="M12 12H10V8H12V12ZM12 16H10V14H12V16ZM0 19H22L11 0L0 19Z" fill={color || "#F0BE3F"} />
        </Svg>
    );
};
