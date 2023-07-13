import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { DocumentsForm } from "../ui/verificationCenter/documents";
import { CoreProvider } from "../../../shared/providers/core";

const DocumentsFormMeta: ComponentMeta<typeof DocumentsForm> = {
    title: "Services/Profile/VerificationCenter/DocumentsForm",
    component: DocumentsForm,
};

export default DocumentsFormMeta;

type DocumentsFormStory = ComponentStory<typeof DocumentsForm>;

export const Basic: DocumentsFormStory = (args) => (
    <CoreProvider>
        <DocumentsForm />
    </CoreProvider>
);
