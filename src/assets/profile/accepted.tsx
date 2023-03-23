import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const AcceptedIcon: FC<IconProps> = ({ color }) => {
    return (
        <Svg style={{ width: 10, height: 10 }} width="18" height="14" viewBox="0 0 18 14" fill="none">
            <Path
                d="M17.5 1.41L5.5 13.41L0 7.91L1.41 6.5L5.5 10.58L16.09 1.52588e-07L17.5 1.41Z"
                fill={color || "#979797"}
            />
        </Svg>
    );
};
