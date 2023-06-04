import React, { FC } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";

interface IWalletDetails {
    code: string;
}

export const WalletDetails: FC<IWalletDetails> = ({ code }: IWalletDetails) => {
    return (
        <ScrollView>
            <View>
                <Text>Total</Text>
                <Text>Available</Text>
                <Text>Unavailable</Text>
            </View>
            <View>
                <Text>Trade</Text>
                <Text>Buy Crypto</Text>
                <Text>Sell Crypto</Text>
            </View>
            <View>
                {/* TODO: Markets by selected currency (wallet) */}
                <View>
                    <Text>Spot</Text>
                    <Pressable>
                        <Text>More</Text>
                    </Pressable>
                </View>

                <View>{/* Slider with markets as a card  */}</View>
            </View>
            <View>
                <View>
                    <Text>History</Text>
                    <Pressable>
                        <Text>More</Text>
                    </Pressable>
                </View>
                <Text>Tab panel with: All, deposit, withdrawal</Text>
                <View>
                    <Text>Table</Text>
                </View>
            </View>
        </ScrollView>
    );
};
