import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const setValueStorage = (key: string, value: string) => {
    return storage.set(key, value);
};

export const getValueStorage = (key: string) => {
    return storage.getString(key);
};
