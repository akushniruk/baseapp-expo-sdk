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
    Image,
} from "react-native";

type AlertComponentType = "success" | "error" | "info" | "warn";

export interface AlertComponentProps {
    type: AlertComponentType;
    messageType: string;
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

    const style: ViewStyle[] = [styles.container];

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
            style.push(styles.containerShown);

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

    const renderAlertIcon = useMemo(() => {
        switch (type) {
            case "success":
                return (
                    <Image
                        source={require("../../../../assets/notification/success.png")}
                    />
                );
            case "error":
                return (
                    <Image
                        source={require("../../../../assets/notification/error.png")}
                    />
                );
            case "info":
                return (
                    <Image
                        source={require("../../../../assets/notification/info.png")}
                    />
                );
            case "warn":
                return (
                    <Image
                        source={require("../../../../assets/notification/warning.png")}
                    />
                );
            default:
                return null;
        }
    }, [type]);

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
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        elevation: 1,
                        height: 65,
                    },
                }}
            >
                <TouchableOpacity onPress={onClose} style={styles.content}>
                    {renderAlertIcon}
                    <View style={styles.contentTextWrapper}>
                        <Text numberOfLines={2} style={styles.contentTitle}>
                            {messageType}
                        </Text>
                        <Text numberOfLines={2} style={styles.contentMessage}>
                            {messageText}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }, [messageText, animatedValue]);

    return content;
};

AlertComponent.defaultProps = {
    type: "success",
    messageType: "",
    messageText: "",
    onClose: undefined,
};
