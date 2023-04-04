import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeysCreateModal } from "../ui/apiKeys/apiKeysCreateModal";
import { CoreProvider } from "../../../shared/providers/core";

const ApiKeysCreateModalMeta: ComponentMeta<typeof ApiKeysCreateModal> = {
    title: "Services/Profile/ApiKeys/CreateModal",
    component: ApiKeysCreateModal,
};

export default ApiKeysCreateModalMeta;

type ApiKeysCreateModalStory = ComponentStory<typeof ApiKeysCreateModal>;

export const Basic: ApiKeysCreateModalStory = (args) => (
    <CoreProvider>
        <ApiKeysCreateModal />
    </CoreProvider>
);
