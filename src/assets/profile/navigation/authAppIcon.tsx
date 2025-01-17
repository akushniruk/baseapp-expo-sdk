import React, { FC } from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import { IconProps } from "../interface";

export const AuthAppIcon: FC<IconProps> = ({ color, width }) => {
    return (
        <Svg width="31" height="32" viewBox="0 0 31 32" fill="none">
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#D9D9D9" />
            <Path
                d="M22 12L14 17L6 12V10L14 15L22 10V12ZM22 8H6C4.89 8 4 8.89 4 10V22C4 22.5304 4.21071 23.0391 4.58579 23.4142C4.96086 23.7893 5.46957 24 6 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V10C24 8.89 23.1 8 22 8Z"
                fill="#9199B1"
            />
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#E5E7EC" />
            <Path
                d="M21.2 12.6L14 17.1L6.8 12.6V10.8L14 15.3L21.2 10.8V12.6ZM21.2 9H6.8C5.801 9 5 9.801 5 10.8V21.6C5 22.0774 5.18964 22.5352 5.52721 22.8728C5.86477 23.2104 6.32261 23.4 6.8 23.4H21.2C21.6774 23.4 22.1352 23.2104 22.4728 22.8728C22.8104 22.5352 23 22.0774 23 21.6V10.8C23 9.801 22.19 9 21.2 9Z"
                fill="#9199B1"
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 20C21.7 20 19 22.7 19 26C19 29.3 21.7 32 25 32C28.3 32 31 29.3 31 26C31 22.7 28.3 20 25 20Z"
                fill="#419E6A"
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6408 25.6999L20.8008 26.5399L23.5008 29.2399L29.5008 23.2399L28.6608 22.3999L23.5008 27.5599L21.6408 25.6999Z"
                fill="white"
            />
        </Svg>
    );
};
