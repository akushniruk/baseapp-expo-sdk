import HapticFeedback from "react-native-haptic-feedback";

export const hapticFeedback = (type = "impactLight", force = false) => {
    HapticFeedback.trigger(type, {
        enableVibrateFallback: force,
        ignoreAndroidSystemSettings: force,
    });
};
