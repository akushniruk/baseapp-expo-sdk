import React, { FC, useMemo, useState } from "react";
import { View } from "react-native";
import { SceneRendererProps } from "react-native-tab-view";
import { IRoute, TabPanel } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { historyStyles } from "../../../../services/order/ui/history/history.styles";
import { OrdersHistory } from "../../../../services/order/ui/history/ordersHistory";

const renderScene = (props: SceneRendererProps & { route: any }) => {
    switch (props.route.key) {
        case "open":
            return <OrdersHistory type="open" />;
        case "all":
            return <OrdersHistory type="all" />;
        default:
            return null;
    }
};

export const OrdersHistoryWidget: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => historyStyles(theme), [theme]);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [routes] = useState<IRoute[]>([
        { key: "open", title: "Open" },
        { key: "all", title: "All" },
    ]);

    return (
        <View style={styles.container}>
            <TabPanel
                currentTabIndex={tabIndex}
                renderScene={(props: SceneRendererProps & { route: any }) => renderScene(props)}
                routes={routes}
                onCurrentTabChange={setTabIndex}
            />
        </View>
    );
};
