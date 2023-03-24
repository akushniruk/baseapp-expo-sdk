import { FC } from "react";
import { ImageProps } from "./interface";
import Svg, { Path, Ellipse } from "react-native-svg";

export const AddressUnverified: FC<ImageProps> = () => {
    return (
        <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#D9D9D9" />
            <Path d="M12 23V17H16V23H21V15H24L14 6L4 15H7V23H12Z" fill="#9199B1" />
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#E5E7EC" />
            <Path d="M12 23V17H16V23H21V15H24L14 6L4 15H7V23H12Z" fill="#9199B1" />
            <Path
                d="M25 19C28.318 19 31 21.682 31 25C31 28.318 28.318 31 25 31C21.682 31 19 28.318 19 25C19 21.682 21.682 19 25 19Z"
                fill="#9199B1"
            />
            <Path
                d="M28 22.6043L27.3957 22L25 24.3957L22.6043 22L22 22.6043L24.3957 25L22 27.3957L22.6043 28L25 25.6043L27.3957 28L28 27.3957L25.6043 25L28 22.6043Z"
                fill="white"
            />
        </Svg>
    );
};

export const AddressVerified: FC<ImageProps> = () => {
    return (
        <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#D9D9D9" />
            <Path d="M12 23V17H16V23H21V15H24L14 6L4 15H7V23H12Z" fill="#9199B1" />
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#E5E7EC" />
            <Path d="M12 23V17H16V23H21V15H24L14 6L4 15H7V23H12Z" fill="#9199B1" />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 19C21.7 19 19 21.7 19 25C19 28.3 21.7 31 25 31C28.3 31 31 28.3 31 25C31 21.7 28.3 19 25 19Z"
                fill="#419E6A"
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.64 24.7L20.8 25.54L23.5 28.24L29.5 22.24L28.66 21.4L23.5 26.56L21.64 24.7Z"
                fill="white"
            />
        </Svg>
    );
};
