import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./interface";

export const StarIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg style={{ width }} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M10.8817 11.7214C11.2331 11.4608 11.6225 11.1236 11.995 10.7043C12.3698 11.126 12.7626 11.4655 13.1188 11.7283C13.3815 11.9222 13.6871 12.1206 14.0313 12.3041C13.7346 12.838 13.5317 13.3675 13.3967 13.839C13.3423 14.0291 13.2925 14.2322 13.2504 14.4464C12.8064 14.3699 12.3845 14.34 12.0037 14.34C11.6182 14.34 11.1941 14.3706 10.7497 14.4475C10.7075 14.2329 10.6576 14.0294 10.6031 13.839C10.4679 13.3667 10.2645 12.8362 9.96698 12.3013C10.3136 12.1157 10.6199 11.9155 10.8817 11.7214Z"
                stroke={color || "#090909"}
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
