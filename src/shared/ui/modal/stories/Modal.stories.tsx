import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Modal } from "..";
import { CoreProvider } from "../../../providers/core";
import { Button } from "../../button";
import BottomSheet from "@gorhom/bottom-sheet";
import { Text } from "react-native";

const ModalMeta: ComponentMeta<typeof Modal> = {
    title: "Shared/UI/Modal",
    component: Modal,
};

export default ModalMeta;

type ModalStory = ComponentStory<typeof Modal>;

export const Basic: ModalStory = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <CoreProvider>
            <Button title="open" onPress={() => setIsOpen(!isOpen)} isLoading={false} />
            <Modal snapPoints={["40%", "60%"]} bottomSheetRef={bottomSheetRef} isOpen={isOpen} setIsOpen={setIsOpen}>
                <Text>Awesome</Text>
            </Modal>
        </CoreProvider>
    );
};
