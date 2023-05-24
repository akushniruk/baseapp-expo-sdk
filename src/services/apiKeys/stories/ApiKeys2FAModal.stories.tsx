import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeys2FAModal } from "../ui/apiKeys2FAModal";
import { CoreProvider } from "../../../shared/providers/core";
import { Button } from "../../../shared";

const ApiKeys2FAModalMeta: ComponentMeta<typeof ApiKeys2FAModal> = {
    title: "Services/ApiKeys/2FAModal",
    component: ApiKeys2FAModal,
};

export default ApiKeys2FAModalMeta;

type ApiKeys2FAModalStory = ComponentStory<typeof ApiKeys2FAModal>;

export const Basic: ApiKeys2FAModalStory = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <CoreProvider>
            <Button title="open" onPress={() => setIsOpen(!isOpen)} isLoading={false} />
            <ApiKeys2FAModal
                buttonTitle="Create"
                isLoading={false}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                sendRequest={() => console.log("sendRequest")}
            />
        </CoreProvider>
    );
};
