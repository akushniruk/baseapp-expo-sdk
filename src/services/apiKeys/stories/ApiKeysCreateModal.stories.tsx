import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeysCreateModal } from "../ui/apiKeysCreateModal";
import { CoreProvider } from "../../../shared/providers/core";
import { Button } from "../../../shared";

const ApiKeysCreateModalMeta: ComponentMeta<typeof ApiKeysCreateModal> = {
    title: "Services/ApiKeys/ApiKeysCreateModal",
    component: ApiKeysCreateModal,
};

export default ApiKeysCreateModalMeta;

type ApiKeysCreateModalStory = ComponentStory<typeof ApiKeysCreateModal>;

export const Basic: ApiKeysCreateModalStory = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <CoreProvider>
            <Button title="open" onPress={() => setIsOpen(!isOpen)} isLoading={false} />
            <ApiKeysCreateModal buttonTitle="Create" isLoading={false} setIsOpen={setIsOpen} isOpen={isOpen} />
        </CoreProvider>
    );
};
