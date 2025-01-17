import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../interface";

export const Copy: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg style={{ width }} width="19" height="22" viewBox="0 0 19 22" fill="none">
            <Path
                d="M17 20H6V6H17V20ZM17 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4ZM14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16H2V2H14V0Z"
                fill={color || "#979797"}
            />
        </Svg>
    );
};
