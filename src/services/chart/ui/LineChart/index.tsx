import { StyleSheet, View, Text } from "react-native";

import Graph from "./graph";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
    },
});

export const LineChart = () => {
    return (
        <View style={styles.container}>
            {/* <Text>new chart</Text> */}
            <Graph />
        </View>
    );
};
