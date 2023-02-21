import * as Localisation from "expo-localization";
import i18n from "i18n-js";
import { en } from "./global-en";
import { es } from "./global-es";

i18n.translations = {
    en: en,
    es: es,
};

i18n.locale = Localisation.locale || "en";
i18n.fallbacks = true;

export default i18n;
