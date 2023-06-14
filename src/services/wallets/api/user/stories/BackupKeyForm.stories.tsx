import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { BackupKeyForm } from "../ui/security/backupKeyForm";
import { CoreProvider } from "../../../../../shared/providers/core";

const BackupKeyFormMeta: ComponentMeta<typeof BackupKeyForm> = {
    title: "Services/Profile/BackupKeyForm",
    component: BackupKeyForm,
};

export default BackupKeyFormMeta;

type BackupKeyFormStory = ComponentStory<typeof BackupKeyForm>;

export const Basic: BackupKeyFormStory = (args) => (
    <CoreProvider>
        <BackupKeyForm />
    </CoreProvider>
);
