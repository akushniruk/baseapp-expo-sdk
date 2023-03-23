import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const ArrowLeftIcon: FC<IconProps> = ({ color }) => {
    return (
        <Svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.4 1.4L6 0L0 6L6 12L7.4 10.6L2.8 6L7.4 1.4Z"
                fill={color || "#979797"}
            />
        </Svg>
    );
};
