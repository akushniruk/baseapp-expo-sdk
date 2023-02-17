module.exports = {
    stories: [
        "../components/**/*.stories.?(ts|tsx|js|jsx)",
        "../src/services/**/*.stories.?(ts|tsx|js|jsx)",
        "../src/services/**/**/**/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-ondevice-notes",
        "@storybook/addon-ondevice-controls",
        "@storybook/addon-ondevice-backgrounds",
        "@storybook/addon-ondevice-actions",
    ],
};
