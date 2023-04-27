import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform, View, Pressable } from "react-native";

export const Link = ({ to, action, children, ...rest }: any) => {
    const { onPress, ...props } = useLinkProps({ to, action });

    const [isHovered, setIsHovered] = useState(false);

    if (Platform.OS === "web") {
        // It's important to use a `View` or `Text` on web instead of `TouchableX`
        // Otherwise React Native for Web omits the `onClick` prop that's passed
        // You'll also need to pass `onPress` as `onClick` to the `View`
        // You can add hover effects using `onMouseEnter` and `onMouseLeave`
        return (
            <View
                onClick={onPress}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    transitionDuration: "150ms",
                    opacity: isHovered ? 0.5 : 1,
                }}
                {...props}
                {...rest}
            >
                {children}
            </View>
        );
    }

    return (
        <Pressable onPress={onPress} {...props} {...rest}>
            {children}
        </Pressable>
    );
};
