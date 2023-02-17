import React from "react";
import { Text, View } from "react-native";
import { useGetMarketsQuery } from "../api/marketsApi";

const Markets = () => {
    const { data: markets, isLoading } = useGetMarketsQuery();
    console.log(isLoading);
    return (
        <View>
            <Text>{JSON.stringify(markets)}</Text>
        </View>
    );
};

export default Markets;
