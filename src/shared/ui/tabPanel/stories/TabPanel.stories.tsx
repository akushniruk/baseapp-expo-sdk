import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { IRoute, TabPanel } from "..";
import { CoreProvider } from "../../../providers/core";
import { View, Text } from "react-native";
import { SceneMap } from "react-native-tab-view";

const TabPanelMeta: ComponentMeta<typeof TabPanel> = {
    title: "Shared/UI/TabPanel",
    component: TabPanel,
};

export default TabPanelMeta;

type TabPanelStory = ComponentStory<typeof TabPanel>;

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#ff4081", margin: 10 }}>
        <Text>First Route</Text>
    </View>
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
        <Text>Second Route</Text>
    </View>
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#fcd000" }}>
        <Text>Third Route</Text>
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
});

export const Basic: TabPanelStory = (args) => {
    const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
    const [routes] = useState<IRoute[]>([
        { key: "first", title: "First" },
        { key: "second", title: "Second" },
        { key: "third", title: "Third" },
    ]);

    return (
        <CoreProvider>
            <TabPanel
                renderScene={renderScene}
                routes={routes}
                currentTabIndex={currentTabIndex}
                onCurrentTabChange={setCurrentTabIndex}
            />
        </CoreProvider>
    );
};
