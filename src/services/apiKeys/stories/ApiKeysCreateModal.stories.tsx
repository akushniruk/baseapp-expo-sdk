import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeysCreateModal } from "../ui/apiKeysCreateModal";
import { CoreProvider } from "../../../shared/providers/core";

const ApiKeysCreateModalMeta: ComponentMeta<typeof ApiKeysCreateModal> = {
    title: "Services/ApiKeys/CreateModal",
    component: ApiKeysCreateModal,
};

export default ApiKeysCreateModalMeta;

type ApiKeysCreateModalStory = ComponentStory<typeof ApiKeysCreateModal>;

export const Basic: ApiKeysCreateModalStory = (args) => (
    <CoreProvider>
        <ApiKeysCreateModal
            buttonTitle="Close"
            isLoading={false}
            isOpen={true}
            handleClose={() => console.log("handleClose")}
        />
    </CoreProvider>
);
