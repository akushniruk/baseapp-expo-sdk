import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const SelectIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width={width || 24} height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M17.28 10.45L21 6.72999M21 6.72999L17.28 3.00999M21 6.72999H3M6.72 13.55L3 17.27M3 17.27L6.72 20.99M3 17.27H21"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
