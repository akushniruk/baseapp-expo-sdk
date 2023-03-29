import AsyncStorage from "@react-native-async-storage/async-storage";

export const setValueStorage = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error("storage: ", error);
    }
};

export const getValueStorage = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);

        if (value !== null) {
            return value;
        }
    } catch (error) {
        console.error("storage:", error);
    }
};
