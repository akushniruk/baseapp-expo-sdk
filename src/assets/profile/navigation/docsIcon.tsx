import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../interface";

export const DocsIcon: FC<IconProps> = ({ color, width }) => {
    return (
        <Svg style={{ width: width || 20 }} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
                d="M15.8333 4.16667V15.8333H4.16667V4.16667H15.8333ZM15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5Z"
                fill="black"
            />
            <Path
                d="M11.6673 14.1668H5.83398V12.5002H11.6673V14.1668ZM14.1673 10.8335H5.83398V9.16683H14.1673V10.8335ZM14.1673 7.50016H5.83398V5.8335H14.1673V7.50016Z"
                fill="black"
            />
        </Svg>
    );
};
