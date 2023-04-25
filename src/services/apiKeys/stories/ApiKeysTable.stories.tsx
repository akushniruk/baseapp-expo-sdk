import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeysTable } from "../ui/apiKeysTable";
import { CoreProvider } from "../../../shared/providers/core";

const ApiKeysTableMeta: ComponentMeta<typeof ApiKeysTable> = {
    title: "Services/ApiKeys/Table",
    component: ApiKeysTable,
};

export default ApiKeysTableMeta;

type ApiKeysTableStory = ComponentStory<typeof ApiKeysTable>;

export const Basic: ApiKeysTableStory = (args) => (
    <CoreProvider>
        <ApiKeysTable
            createRequest={() => console.log("createRequest")}
            updateRequest={() => console.log("updateRequest")}
            deleteRequest={() => console.log("deleteRequest")}
        />
    </CoreProvider>
);
