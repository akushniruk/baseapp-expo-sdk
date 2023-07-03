import React, { FC, useMemo } from "react";
import { useWindowDimensions, View } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { useThemeContext } from "../../hooks/useThemeContext";
import { ICustomTabPanelStyles, tabPanelStyles } from "./tabPanel.styles";

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
    customStyles?: ICustomTabPanelStyles;
}

export const TabPanel: FC<ITabPanelProps> = ({
    testID,
    routes,
    renderScene,
    currentTabIndex,
    customStyles,
    onCurrentTabChange,
}: ITabPanelProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => tabPanelStyles(theme, customStyles), [theme, customStyles]);

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
                style={styles.tabViewStyle}
                renderTabBar={renderTabBar}
                navigationState={{ index: currentTabIndex, routes }}
                renderScene={renderScene}
                onIndexChange={onCurrentTabChange}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
};
