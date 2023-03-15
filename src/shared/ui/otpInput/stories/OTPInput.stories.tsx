import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OTPInput } from "..";
import { CoreProvider } from "../../../providers/core";

const OTPInputMeta: ComponentMeta<typeof OTPInput> = {
    title: "Shared/UI/OTPInput",
    component: OTPInput,
};

export default OTPInputMeta;

type OTPInputStory = ComponentStory<typeof OTPInput>;

export const Basic: OTPInputStory = (args) => (
    <CoreProvider>
        <OTPInput
            code=""
            setCode={() => {}}
            maximumLength={6}
            emptyInputSymbol="X"
        />
    </CoreProvider>
);
