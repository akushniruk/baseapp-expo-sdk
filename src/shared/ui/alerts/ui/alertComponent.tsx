import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { styles } from "./styles/alertComponentStyle";
import {
    TouchableOpacity,
    View,
    Text,
    Animated,
    ViewStyle,
    Platform,
} from "react-native";

type AlertComponentType = "success" | "error" | "info" | "warn";

export interface AlertComponentProps {
    type: AlertComponentType;
    messageType: string | React.ReactNode;
    messageText: string | React.ReactNode;
    alertDisplayTime?: string;
    onClose?: () => void;
}

export const AlertComponent: React.FC<AlertComponentProps> = ({
    type,
    messageType,
    messageText,
    alertDisplayTime,
    onClose,
}: AlertComponentProps) => {
    const [animatedValue] = useState(new Animated.Value(0));
    const hideTimer = useRef<number | undefined>();

    const handleHideNotification = useCallback(() => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start(() => {
            onClose?.();
        });
    }, [animatedValue]);

    useEffect(() => {
        if (messageText || alertDisplayTime) {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
            }).start(() => {
                hideTimer.current = window.setTimeout(() => {
                    handleHideNotification();
                }, 3000);
            });
        }
    }, [messageText, messageType, type, alertDisplayTime]);

    const content = useMemo(() => {
        return (
            <Animated.View
                style={{
                    ...{
                        transform: [
                            {
                                translateY: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 50],
                                }),
                            },
                        ],
                        opacity:
                            Platform.OS !== "android"
                                ? animatedValue.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [0, 1],
                                  })
                                : 1,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                }}
            >
                <TouchableOpacity
                    onPress={onClose}
                    style={[styles.content, { backgroundColor: "#fff" }]}
                >
                    {/* {notification.icon ? (
                        <View style={styles.contentIcon}>
                            {notification.icon}
                        </View>
                    ) : null} */}
                    <View style={styles.contentTextWrapper}>
                        <Text numberOfLines={2} style={styles.contentTitle}>
                            test
                        </Text>
                        {messageText ? (
                            <Text
                                numberOfLines={2}
                                style={styles.contentMessage}
                            >
                                {messageText}
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }, [messageText, animatedValue]);

    const style: ViewStyle[] = [styles.container];

    if (messageText) {
        style.push(styles.containerShown);
    }

    return content;
};

AlertComponent.defaultProps = {
    type: "success",
    messageType: "",
    messageText: "",
    onClose: undefined,
};
