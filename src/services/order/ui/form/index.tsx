import React, { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { orderFormStyles } from "./orderForm.styles";

export const OrderForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => orderFormStyles(theme), [theme]);

    return (
        <>
            <View>
                <Text>text1</Text>
            </View>
        </>
    );
};
