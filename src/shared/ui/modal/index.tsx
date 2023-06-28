import React, { FC, useCallback, useEffect, useMemo } from "react";
import { useThemeContext } from "../../hooks/useThemeContext";
import { modalStyles } from "./modal.styles";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface ModalProps {
    children: any;
    snapPoints: string[];
    bottomSheetRef: React.RefObject<BottomSheetMethods>;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    resetValue?: () => void;
}

export const Modal: FC<ModalProps> = ({
    children,
    snapPoints = ["40%", "60%"],
    bottomSheetRef,
    isOpen,
    setIsOpen,
    resetValue,
}: ModalProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => modalStyles(theme), [theme]);

    useEffect(() => {
        if (isOpen) {
            bottomSheetRef?.current?.snapToIndex(0);
        }
    }, [isOpen, setIsOpen]);

    const renderBackdrop = useCallback(
        (props: any) => {
            return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={1} />;
        },
        [isOpen]
    );

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            setIsOpen(false);
            resetValue && resetValue();
        }
    }, []);

    return (
        <BottomSheet
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            ref={bottomSheetRef}
            index={-1}
            onChange={handleSheetChanges}
            enablePanDownToClose
        >
            <BottomSheetView>{children}</BottomSheetView>
        </BottomSheet>
    );
};
