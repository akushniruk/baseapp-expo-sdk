module.exports = {
    stories: [
        "../src/shared/**/**/**/*.stories.?(ts|tsx|js|jsx)",
        "../src/services/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/services/**/**/**/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/widgets/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/widgets/**/**/**/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode",
        "@storybook/addon-react-native-web",
    ],
    framework: "@storybook/react",
    typescript: {
        reactDocgen: "none",
    },
};
