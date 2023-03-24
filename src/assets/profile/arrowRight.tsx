import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const ArrowRightIcon: FC<IconProps> = ({ color, width }) => {
    return (
        <Svg style={{ width }} width="8" height="12" viewBox="0 0 8 12" fill="none">
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.4 0L0 1.4L4.6 6L0 10.6L1.4 12L7.4 6L1.4 0Z"
                fill={color || "#979797"}
            />
        </Svg>
    );
};
