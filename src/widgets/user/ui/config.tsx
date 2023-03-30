import { StarFeeGroup } from "../../../assets/profile";

export interface ProfileNavigationOption {
    title: string;
    route: string;
    icon: JSX.Element;
}

export const profileNavigationOptions: ProfileNavigationOption[] = [
    { title: "Referral", route: "/Referral", icon: <StarFeeGroup /> },
    { title: "API Keys", route: "/ApiKeys", icon: <StarFeeGroup /> },
    { title: "Security", route: "/Security", icon: <StarFeeGroup /> },
    { title: "API Docs", route: "/ApiDocs", icon: <StarFeeGroup /> },
    { title: "Help & Support", route: "/Support", icon: <StarFeeGroup /> },
    // { title: "Share App", route: "/ShareApp", icon: <StarFeeGroup /> },
];
