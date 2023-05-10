import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../interface";

export const FeeGroupIcon: FC<IconProps> = ({ color, width }) => {
    return (
        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
            <Path
                d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                fill="#090909"
            />
        </Svg>
    );
};
