import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DispatchAlertPayload {
    messageText?: string | React.ReactNode;
    type: string;
    messageType?: string;
    alertDisplayTime?: string;
}
export interface AlertsState {
    alerts: DispatchAlertPayload[];
}

export const initialAlertsState: AlertsState = {
    alerts: [],
};

export const alerts = createSlice({
    name: "alerts",
    initialState: initialAlertsState,
    reducers: {
        dispatchAlert(state, action: PayloadAction<DispatchAlertPayload>) {
            state.alerts.push(action.payload);
        },
        deleteAlert(state) {
            const alertWithoutAutoClose = state.alerts.find(
                (alert: any) => !alert.autoCloseDisabled
            );

            if (alertWithoutAutoClose) {
                const indexToRemove = state.alerts.indexOf(
                    alertWithoutAutoClose
                );
                state.alerts.splice(indexToRemove, 1);
            }
        },
        deleteAlertByIndex(state, action: PayloadAction<number>) {
            state.alerts.splice(action.payload, 1);
        },
    },
});

export const { dispatchAlert, deleteAlert, deleteAlertByIndex } =
    alerts.actions;

export default alerts.reducer;
