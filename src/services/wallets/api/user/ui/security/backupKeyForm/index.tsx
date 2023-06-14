import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import { useThemeContext } from "../../../../../../../shared/hooks/useThemeContext";
import { backupKeyFormStyles } from "./backupKeyForm.style";
import { Button, OTPInput, useAppSelector } from "../../../../../../../shared";
import BottomSheet from "@gorhom/bottom-sheet";
import { useGetMFAMutation, useToggle2FAMutation } from "../../../api/twoFactorAuth";
import { Modal } from "../../../../../../../shared/ui/modal";
import { RootState } from "../../../../../../../shared/providers/redux/model/store";
import { IMFA } from "../../../api/types";
import { CopyField } from "../../../../../../../shared/ui/copyField";

interface IBackupKeyForm {
    navigation?: any;
}

export const BackupKeyForm: FC<IBackupKeyForm> = ({ navigation }) => {
    const [getMFA] = useGetMFAMutation();
    const [toggle2FA, { isLoading, isSuccess }] = useToggle2FAMutation();

    const { theme } = useThemeContext();
    const styles = useMemo(() => backupKeyFormStyles(theme), [theme]);

    const [isOpen2FAModal, setIsOpen2FAModal] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const bottomSheetRef = useRef<BottomSheet>(null);

    const mfa: IMFA = useAppSelector((state: RootState) => state.user.mfa);

    const secretRegex = /secret=(\w+)/;
    const secretMatch = mfa?.url?.match(secretRegex);
    const secret = secretMatch ? secretMatch[1] : null;

    const handleSendRequest = useCallback(() => {
        toggle2FA({ code: otp, status: "enable" });
        setOtp("");
        bottomSheetRef?.current?.forceClose();
        setIsOpen2FAModal(false);
    }, [otp]);

    useEffect(() => {
        getMFA();
    }, []);

    useEffect(() => {
        if (isSuccess) {
            navigation?.navigate("Profile");
            bottomSheetRef?.current?.forceClose();
            setIsOpen2FAModal(false);
        }
    }, [isSuccess]);

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Please save this Backup Key in a secure place. This key can be used to recover your Authenticator.
                    Otherwise, resetting your Authenticator will take at least 7 days.
                </Text>
                <View style={styles.barCodeWrapper}>
                    {mfa?.barcode.length > 0 && (
                        <Image style={styles.barCode} source={{ uri: `data:image/png;base64,${mfa?.barcode}` }} />
                    )}
                </View>
                <View style={styles.copyFieldContainer}>
                    <CopyField title="MFA code" value={secret || ""} />
                </View>
                <View style={styles.button}>
                    <Button title="Activate" onPress={() => setIsOpen2FAModal(true)} isLoading={false} />
                </View>
            </View>
            <Modal
                snapPoints={["40%", "60%"]}
                bottomSheetRef={bottomSheetRef}
                isOpen={isOpen2FAModal}
                setIsOpen={setIsOpen2FAModal}
                resetValue={() => setOtp("")}
            >
                <View style={styles.container}>
                    <Text style={styles.label}>Enter 2fa code from the Google Authenticator app</Text>
                    <OTPInput code={otp} setCode={setOtp} maximumLength={6} emptyInputSymbol="*" />

                    <Button onPress={handleSendRequest} title="Activate" isLoading={isLoading} disabled={!otp} />
                </View>
            </Modal>
        </View>
    );
};
