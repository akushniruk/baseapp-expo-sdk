import { FC } from "react";
import { ImageProps } from "./interface";
import Svg, { Path, Ellipse } from "react-native-svg";

export const DocumentsUnverified: FC<ImageProps> = () => {
    return (
        <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#D9D9D9" />
            <Path
                d="M5.66667 8H22.3333C23.2083 8 24 8.79167 24 9.66667V21.3333C24 22.2083 23.2083 23 22.3333 23H5.66667C4.79167 23 4 22.2083 4 21.3333V9.66667C4 8.79167 4.79167 8 5.66667 8ZM15.6667 10.5V11.3333H22.3333V10.5H15.6667ZM15.6667 12.1667V13H21.9167H22.3333V12.1667H15.6667ZM15.6667 13.8333V14.6667H21.5V13.8333H15.6667ZM10.6667 17.0917C9 17.0917 5.66667 18 5.66667 19.6667V20.5H15.6667V19.6667C15.6667 18 12.3333 17.0917 10.6667 17.0917ZM10.6667 10.5C10.0036 10.5 9.36774 10.7634 8.8989 11.2322C8.43006 11.7011 8.16667 12.337 8.16667 13C8.16667 13.663 8.43006 14.2989 8.8989 14.7678C9.36774 15.2366 10.0036 15.5 10.6667 15.5C11.3297 15.5 11.9656 15.2366 12.4344 14.7678C12.9033 14.2989 13.1667 13.663 13.1667 13C13.1667 12.337 12.9033 11.7011 12.4344 11.2322C11.9656 10.7634 11.3297 10.5 10.6667 10.5Z"
                fill="#9199B1"
            />
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#E5E7EC" />
            <Path
                d="M5.66667 8H22.3333C23.2083 8 24 8.79167 24 9.66667V21.3333C24 22.2083 23.2083 23 22.3333 23H5.66667C4.79167 23 4 22.2083 4 21.3333V9.66667C4 8.79167 4.79167 8 5.66667 8ZM15.6667 10.5V11.3333H22.3333V10.5H15.6667ZM15.6667 12.1667V13H21.9167H22.3333V12.1667H15.6667ZM15.6667 13.8333V14.6667H21.5V13.8333H15.6667ZM10.6667 17.0917C9 17.0917 5.66667 18 5.66667 19.6667V20.5H15.6667V19.6667C15.6667 18 12.3333 17.0917 10.6667 17.0917ZM10.6667 10.5C10.0036 10.5 9.36774 10.7634 8.8989 11.2322C8.43006 11.7011 8.16667 12.337 8.16667 13C8.16667 13.663 8.43006 14.2989 8.8989 14.7678C9.36774 15.2366 10.0036 15.5 10.6667 15.5C11.3297 15.5 11.9656 15.2366 12.4344 14.7678C12.9033 14.2989 13.1667 13.663 13.1667 13C13.1667 12.337 12.9033 11.7011 12.4344 11.2322C11.9656 10.7634 11.3297 10.5 10.6667 10.5Z"
                fill="#9199B1"
            />
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

export const DocumentsVerified: FC<ImageProps> = () => {
    return (
        <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#D9D9D9" />
            <Path
                d="M5.66667 8H22.3333C23.2083 8 24 8.79167 24 9.66667V21.3333C24 22.2083 23.2083 23 22.3333 23H5.66667C4.79167 23 4 22.2083 4 21.3333V9.66667C4 8.79167 4.79167 8 5.66667 8ZM15.6667 10.5V11.3333H22.3333V10.5H15.6667ZM15.6667 12.1667V13H21.9167H22.3333V12.1667H15.6667ZM15.6667 13.8333V14.6667H21.5V13.8333H15.6667ZM10.6667 17.0917C9 17.0917 5.66667 18 5.66667 19.6667V20.5H15.6667V19.6667C15.6667 18 12.3333 17.0917 10.6667 17.0917ZM10.6667 10.5C10.0036 10.5 9.36774 10.7634 8.8989 11.2322C8.43006 11.7011 8.16667 12.337 8.16667 13C8.16667 13.663 8.43006 14.2989 8.8989 14.7678C9.36774 15.2366 10.0036 15.5 10.6667 15.5C11.3297 15.5 11.9656 15.2366 12.4344 14.7678C12.9033 14.2989 13.1667 13.663 13.1667 13C13.1667 12.337 12.9033 11.7011 12.4344 11.2322C11.9656 10.7634 11.3297 10.5 10.6667 10.5Z"
                fill="#9199B1"
            />
            <Ellipse cx="14" cy="15.5" rx="14" ry="15.5" fill="#E5E7EC" />
            <Path
                d="M5.66667 8H22.3333C23.2083 8 24 8.79167 24 9.66667V21.3333C24 22.2083 23.2083 23 22.3333 23H5.66667C4.79167 23 4 22.2083 4 21.3333V9.66667C4 8.79167 4.79167 8 5.66667 8ZM15.6667 10.5V11.3333H22.3333V10.5H15.6667ZM15.6667 12.1667V13H21.9167H22.3333V12.1667H15.6667ZM15.6667 13.8333V14.6667H21.5V13.8333H15.6667ZM10.6667 17.0917C9 17.0917 5.66667 18 5.66667 19.6667V20.5H15.6667V19.6667C15.6667 18 12.3333 17.0917 10.6667 17.0917ZM10.6667 10.5C10.0036 10.5 9.36774 10.7634 8.8989 11.2322C8.43006 11.7011 8.16667 12.337 8.16667 13C8.16667 13.663 8.43006 14.2989 8.8989 14.7678C9.36774 15.2366 10.0036 15.5 10.6667 15.5C11.3297 15.5 11.9656 15.2366 12.4344 14.7678C12.9033 14.2989 13.1667 13.663 13.1667 13C13.1667 12.337 12.9033 11.7011 12.4344 11.2322C11.9656 10.7634 11.3297 10.5 10.6667 10.5Z"
                fill="#9199B1"
            />
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
