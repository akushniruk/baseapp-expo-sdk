import { FC, useCallback, useMemo } from "react";
import { useAppSelector } from "../../../providers/redux/lib/useAppSelector";
import { AlertComponent, AlertComponentProps } from "./alertComponent";
import { useAppDispatch } from "../../../providers/redux/lib/useAppDispatch";
import { deleteAlert, deleteAlertByIndex } from "../model/alertsSlice";

export const Alerts: FC = () => {
    const dispatch = useAppDispatch();
    const alerts = useAppSelector((state) => state.alerts.alerts);

    const handleCloseAlert = useCallback(() => {
        dispatch(deleteAlert());
    }, []);

    const handleCloseAlertByPress = useCallback((alertIndex: number) => {
        dispatch(deleteAlertByIndex(alertIndex));
    }, []);

    const getCustomAlertData = useCallback(
        (alert: { type: AlertComponentProps; messageText: string }) => {
            return [alert.type, alert.messageText, undefined];
        },
        []
    );

    const renderAlerts = useMemo(() => {
        return alerts.map((alert: any, index: number) => {
            const [alertType, messageText] = getCustomAlertData(alert);

            const alertParams: AlertComponentProps = {
                alertDisplayTime: "10000", // TODO: move to config
                type: alertType as any,
                messageText: messageText as any,
                messageType: alert.messageType,
                onClose: handleCloseAlert,
            };

            return <AlertComponent {...alertParams} />;
        });
    }, [alerts]);

    return <>{renderAlerts}</>;
};
