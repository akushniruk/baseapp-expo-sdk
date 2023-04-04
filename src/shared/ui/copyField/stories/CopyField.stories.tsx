import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { CopyField } from "..";
import { CoreProvider } from "../../../providers/core";

const CopyFieldMeta: ComponentMeta<typeof CopyField> = {
    title: "Shared/UI/CopyField",
    component: CopyField,
};

export default CopyFieldMeta;

type CopyFieldStory = ComponentStory<typeof CopyField>;

export const Basic: CopyFieldStory = (args) => (
    <CoreProvider>
        <CopyField title="Referral" value="123455677" />
    </CoreProvider>
);
