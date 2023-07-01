import { ReferralIcon } from "../../../assets/profile/navigation/referralIcon";
import { ApiKeyIcon } from "../../../assets/profile/navigation/apiKeyIcon";
import { SecurityIcon } from "../../../assets/profile/navigation/securityIcon";
import { DocsIcon } from "../../../assets/profile/navigation/docsIcon";
import { HelpIcon } from "../../../assets/profile/navigation/helpIcon";
import { SettingsIcon } from "../../../assets/profile/navigation/settingsIcon";

export interface ProfileNavigationOption {
    title: string;
    route: string;
    icon: JSX.Element;
}

export const profileNavigationOptions: (color: string) => ProfileNavigationOption[] = (color: string) => [
    { title: "Referral", route: "/Referral", icon: <ReferralIcon color={color} /> },
    { title: "API Keys", route: "/ApiKeys", icon: <ApiKeyIcon color={color} /> },
    { title: "Security", route: "/Security", icon: <SecurityIcon color={color} /> },
    { title: "API Docs", route: "/ApiDocs", icon: <DocsIcon color={color} /> },
    { title: "Help & Support", route: "/Support", icon: <HelpIcon color={color} /> },
    { title: "Settings", route: "/Settings", icon: <SettingsIcon color={color} /> },
];
