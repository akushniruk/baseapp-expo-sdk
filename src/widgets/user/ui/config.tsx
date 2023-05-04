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

export const profileNavigationOptions: ProfileNavigationOption[] = [
    { title: "Referral", route: "/Referral", icon: <ReferralIcon /> },
    { title: "API Keys", route: "/ApiKeys", icon: <ApiKeyIcon /> },
    { title: "Security", route: "/Security", icon: <SecurityIcon /> },
    { title: "API Docs", route: "/ApiDocs", icon: <DocsIcon /> },
    { title: "Help & Support", route: "/Support", icon: <HelpIcon /> },
    { title: "Settings", route: "/Settings", icon: <SettingsIcon /> },
];
