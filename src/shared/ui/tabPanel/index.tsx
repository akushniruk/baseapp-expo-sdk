import React, { FC, useMemo } from "react";
import { useWindowDimensions, View } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { useThemeContext } from "../../hooks/useThemeContext";
import { tabPanelStyles } from "./tabPanel.styles";

type OnCurrentTabChange = (index: number) => void;

export interface IRoute {
    key: string;
    title: string;
}

export interface ITabPanelProps {
    testID?: string;
    // TODO: add type
    renderScene: any;
    /**
     * List of tabs to be rendered
     */
    routes: IRoute[];
    /**
     * Function which is called for changing currently active tab is changed
     */
    onCurrentTabChange: OnCurrentTabChange;
    /**
     * Current index of tab
     */
    currentTabIndex: number;
}

export const TabPanel: FC<ITabPanelProps> = ({
    testID,
    routes,
    renderScene,
    currentTabIndex,
    onCurrentTabChange,
}: ITabPanelProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => tabPanelStyles(theme), [theme]);

    const layout = useWindowDimensions();

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            activeColor={styles.activeColor.color}
            labelStyle={styles.labelStyle}
            indicatorStyle={styles.indicatorStyle}
            style={styles.style}
        />
    );

    return (
        <View style={styles.tabPanelContainer} testID={testID}>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index: currentTabIndex, routes }}
                renderScene={renderScene}
                onIndexChange={onCurrentTabChange}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
};
