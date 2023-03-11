import { FC, useCallback, useMemo } from "react";
import { useAppSelector } from "../../../providers/redux";
import { AlertComponent, AlertComponentProps } from "./alertComponent";
import { useDispatch } from "react-redux";
import { deleteAlert, deleteAlertByIndex } from "../model/alertsSlice";
import { View } from "react-native";
import { styles } from "./styles/alertStyle";

export const Alerts: FC = () => {
    const dispatch = useDispatch();
    const alerts = useAppSelector((state) => state.alerts.alerts);

    const handleCloseAlert = useCallback(() => {
        dispatch(deleteAlert());
    }, []);

    const handleCloseAlertByPress = useCallback((alertIndex: number) => {
        dispatch(deleteAlertByIndex(alertIndex));
    }, []);

    const getCustomAlertData = useCallback(
        (
            alert: { type: AlertComponentProps; messageText: string },
            index: number
        ) => {
            switch (alert.type) {
                default:
                    return [alert.type, alert.messageText, undefined];
            }
        },
        []
    );

    const renderAlerts = useMemo(() => {
        return alerts.map((alert: any, index: number) => {
            const [alertType, messageText] = getCustomAlertData(alert, index);

            const alertParams: AlertComponentProps = {
                alertDisplayTime: "10000", // TODO: move to config
                type: alertType as any,
                messageText: messageText as any,
                messageType: alert.messageType,
                onClose: handleCloseAlert,
                onCloseByPress: () => handleCloseAlertByPress(index),
            };

            return (
                <View key={index}>
                    <AlertComponent {...alertParams} />
                </View>
            );
        });
    }, [alerts]);

    return <View>{renderAlerts}</View>;
};
