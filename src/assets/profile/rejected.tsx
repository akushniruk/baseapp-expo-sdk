import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const RejectedIcon: FC<IconProps> = ({ color }) => {
    return (
        <Svg style={{ width: 10, height: 10 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <Path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill={color || "#979797"}
            />
        </Svg>
    );
};
