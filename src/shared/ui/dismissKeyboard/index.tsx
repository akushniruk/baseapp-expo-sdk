import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

export const DismissKeyboard: React.FC<{ children?: any }> = ({ children }) => (
    <TouchableWithoutFeedback style={{ height: "100%" }} onPress={() => Keyboard.dismiss()}>
        <View>{children}</View>
    </TouchableWithoutFeedback>
);
