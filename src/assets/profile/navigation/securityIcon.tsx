import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../interface";

export const SecurityIcon: FC<IconProps> = ({ color, width }) => {
    return (
        <Svg style={{ width: width || 20 }} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
                d="M10 0.833496L2.5 4.16683V9.16683C2.5 13.7918 5.7 18.1168 10 19.1668C14.3 18.1168 17.5 13.7918 17.5 9.16683V4.16683L10 0.833496ZM10 9.99183H15.8333C15.3917 13.4252 13.1 16.4835 10 17.4418V10.0002H4.16667V5.25016L10 2.6585V9.99183Z"
                fill="black"
            />
        </Svg>
    );
};
