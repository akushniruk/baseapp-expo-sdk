import { Keyboard, Pressable } from "react-native";

export const DismissKeyboard: React.FC<{ children?: any }> = ({ children }) => (
    <Pressable onPress={() => Keyboard.dismiss()}>{children}</Pressable>
);
