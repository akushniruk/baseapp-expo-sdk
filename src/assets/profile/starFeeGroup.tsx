import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const StarFeeGroup: FC<IconProps> = ({ color }) => {
    return (
        <Svg style={{ width: 14 }} width="20" height="19" viewBox="0 0 20 19" fill="none">
            <Path
                d="M10 14.9826L16.18 18.6424L14.54 11.7447L20 7.10372L12.81 6.49539L10 0L7.19 6.49539L0 7.10372L5.45 11.7447L3.82 18.6424L10 14.9826Z"
                fill={color || "#979797"}
            />
        </Svg>
    );
};
