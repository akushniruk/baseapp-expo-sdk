import React, { FC, useMemo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MarketsV1WidgetStyles } from "./marketsV1.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { MarketsV1 } from "../../../services/markets/ui/marketsV1";
import { SearchIcon } from "../../../assets/system/search";
import { Input } from "../../../shared";

interface IMarketsV1WidgetProps {
    navigation?: any;
}

export const MarketsV1Widget: FC<IMarketsV1WidgetProps> = ({ navigation }: IMarketsV1WidgetProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => MarketsV1WidgetStyles(theme), [theme]);

    const [searchMarket, setNewSearchMarket] = useState("");
    const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Markets</Text>
                <View style={styles.searchWrapper}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.searchIcon,
                            {
                                backgroundColor: pressed
                                    ? styles.searchIconPressed.backgroundColor
                                    : isOpenSearch
                                    ? styles.searchIconActive.backgroundColor
                                    : styles.searchIcon.backgroundColor,
                            },
                        ]}
                        onPress={() => setIsOpenSearch(!isOpenSearch)}
                    >
                        <SearchIcon color={styles.searchIcon.color} width={10} />
                    </Pressable>
                    {isOpenSearch ? (
                        <View style={styles.inputWrapper}>
                            <Input
                                onChangeText={setNewSearchMarket}
                                value={searchMarket}
                                placeholder={"Search"}
                                label={""}
                                testID={"search"}
                                keyboardType="default"
                            />
                        </View>
                    ) : null}
                </View>
            </View>
            <MarketsV1 navigation={navigation} searchMarket={searchMarket} />
        </View>
    );
};
