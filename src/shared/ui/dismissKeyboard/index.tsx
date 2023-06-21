import { Keyboard, Pressable } from "react-native";

export const DismissKeyboard: React.FC<{ children?: any }> = ({ children }) => (
    <Pressable style={{ height: "100%" }} onPress={() => Keyboard.dismiss()}>
        {children}
    </Pressable>
);
