import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

export const DismissKeyboard: React.FC<{ children?: any }> = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ height: "100%" }}>{children}</View>
    </TouchableWithoutFeedback>
);
