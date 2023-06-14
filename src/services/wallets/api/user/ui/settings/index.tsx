import BottomSheet from "@gorhom/bottom-sheet";
import { useLinkTo } from "@react-navigation/native";
import React, { FC, useMemo, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { ArrowRightIcon } from "../../../../../../assets/profile";
import { useThemeContext } from "../../../../../../shared/hooks/useThemeContext";
import i18n from "../../../../../../shared/libs/i18n/supportedLanguages";
import { Modal } from "../../../../../../shared/ui/modal";
import { settingsStyles } from "./settings.style";

export const Settings: FC = () => {
    const linkTo = useLinkTo();
    const { theme, setTheme } = useThemeContext();
    const styles = useMemo(() => settingsStyles(theme), [theme]);

    const [isOpenLangSelector, setIsOpenLangSelector] = useState<boolean>(false);
    const bottomLangSelectorSheetRef = useRef<BottomSheet>(null);

    const [isOpenAppearance, setIsOpenAppearance] = useState<boolean>(false);
    const bottomAppearanceSheetRef = useRef<BottomSheet>(null);

    const handleChangeLocale = (newLocale: string) => {
        i18n.locale = newLocale;
        bottomLangSelectorSheetRef?.current?.forceClose();
        setIsOpenLangSelector(false);
    };

    const handleChangeAppearance = (newAppearance: string) => {
        setTheme(newAppearance);
        bottomLangSelectorSheetRef?.current?.forceClose();
        setIsOpenLangSelector(false);
    };

    const renderLang = (langCode: string) => {
        switch (langCode) {
            case "en":
            case "uk-Us":
                return "English";
            case "es":
                return "Español (España)";
            default:
                break;
        }
    };

    return (
        <View style={{ height: "100%" }}>
            <Pressable onPress={() => setIsOpenLangSelector(true)} style={styles.block}>
                <Text style={styles.blockTitle}>Language</Text>
                <View style={styles.blockContent}>
                    <Text style={styles.blockContentText}>{renderLang(i18n.locale)}</Text>
                    <ArrowRightIcon color="#090909" />
                </View>
            </Pressable>
            <Pressable onPress={() => setIsOpenAppearance(true)} style={styles.block}>
                <Text style={styles.blockTitle}>Appearance</Text>
                <View style={styles.blockContent}>
                    <Text style={styles.blockContentText}>{theme}</Text>
                    <ArrowRightIcon color="#090909" />
                </View>
            </Pressable>

            <Modal
                snapPoints={["40%", "60%"]}
                bottomSheetRef={bottomLangSelectorSheetRef}
                isOpen={isOpenLangSelector}
                setIsOpen={setIsOpenLangSelector}
            >
                {/* TODO:
                    1. create list of available languages
                    2. add ScrollView
                    3. add Search */}
                <View style={styles.container}>
                    <Text style={styles.label}>Language</Text>
                    <Pressable style={styles.languageContainer} onPress={() => handleChangeLocale("en")}>
                        <Text style={styles.languageText}>English</Text>
                    </Pressable>
                    <Pressable style={styles.languageContainer} onPress={() => handleChangeLocale("es")}>
                        <Text style={styles.languageText}>Español (España)</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                snapPoints={["40%", "60%"]}
                bottomSheetRef={bottomAppearanceSheetRef}
                isOpen={isOpenAppearance}
                setIsOpen={setIsOpenAppearance}
            >
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.label}>Appearance</Text>
                        <Pressable style={styles.languageContainer} onPress={() => handleChangeAppearance("light")}>
                            <Text style={styles.languageText}>Light</Text>
                        </Pressable>
                        <Pressable style={styles.languageContainer} onPress={() => handleChangeAppearance("dark")}>
                            <Text style={styles.languageText}>Dark</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
