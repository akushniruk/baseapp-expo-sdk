import React from "react";
import { Provider } from "react-redux";
import { store } from "./model/store";

export const ReduxProvider: React.FC<{ children?: any }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
