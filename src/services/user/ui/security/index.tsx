import { useLinkTo } from "@react-navigation/native";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, Switch, Platform } from "react-native";
import { ArrowRightIcon } from "../../../../assets/profile";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { securityStyles } from "./security.style";
import { Button, OTPInput, useAppSelector } from "../../../../shared";
import { User } from "../../api/types";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Modal } from "../../../../shared/ui/modal";
import BottomSheet from "@gorhom/bottom-sheet";
import { useToggle2FAMutation } from "../../api/twoFactorAuth";

export const Security: FC = () => {
    const [toggle2FA, { isLoading, isSuccess }] = useToggle2FAMutation();

    const linkTo = useLinkTo();
    const { theme } = useThemeContext();
    const styles = useMemo(() => securityStyles(theme), [theme]);

    const [isOpen2FAModal, setIsOpen2FAModal] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");

    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleActiveOtp = useCallback(() => {
        if (!profile?.otp) {
            linkTo("/TwoFactorAuth");
        } else {
            setIsOpen2FAModal(true);
        }
    }, [profile]);

    const handleSendRequest = useCallback(() => {
        toggle2FA({ code: otp, status: "disable" });
        setOtp("");
        bottomSheetRef?.current?.forceClose();
        setIsOpen2FAModal(false);
    }, [otp]);

    return (
        <View style={{ height: "100%" }}>
            <Pressable onPress={handleActiveOtp} style={styles.block}>
                <Text style={styles.blockTitle}>Two-Factor Authentication (2FA)</Text>
                <Switch
                    onValueChange={handleActiveOtp}
                    value={profile?.otp}
                    ios_backgroundColor="#e3e3de"
                    trackColor={{
                        false: styles.switchInactive.backgroundColor,
                        true: styles.switchEnabled.backgroundColor,
                    }}
                    thumbColor={profile?.otp ? styles.switchEnabled.color : styles.switchInactive.color}
                    {...Platform.select({
                        web: {
                            activeThumbColor: styles.switchEnabled.color,
                        },
                    })}
                />
            </Pressable>
            <Pressable onPress={() => linkTo("/AccountActivity")} style={styles.block}>
                <Text style={styles.blockTitle}>Account Activities</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
            <Pressable onPress={() => linkTo("/ChangePassword")} style={styles.block}>
                <Text style={styles.blockTitle}>Change Password</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
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

                    <Button onPress={handleSendRequest} title="Disable" isLoading={isLoading} disabled={!otp} />
                </View>
            </Modal>
        </View>
    );
};
