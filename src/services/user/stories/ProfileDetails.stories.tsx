import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ProfileDetails } from "../ui/profile/profileDetails";
import { CoreProvider } from "../../../shared/providers/core";

const ProfileDetailsMeta: ComponentMeta<typeof ProfileDetails> = {
    title: "Services/Profile/ProfileDetails",
    component: ProfileDetails,
};

export default ProfileDetailsMeta;

type ProfileDetailsStory = ComponentStory<typeof ProfileDetails>;

export const Basic: ProfileDetailsStory = (args) => (
    <CoreProvider>
        <ProfileDetails />
    </CoreProvider>
);
