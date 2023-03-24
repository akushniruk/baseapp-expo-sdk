import React, { FC } from "react";
import { AddressUnverified, AddressVerified } from "./addressIcons";
import { DocumentsUnverified, DocumentsVerified } from "./documentsIcons";
import { EmailUnverified, EmailVerified } from "./emailIcons";
import { VerificationImagesProps } from "./interface";
import { PhoneUnverified, PhoneVerified } from "./phoneIcons";
import { ProfileUnverified, ProfileVerified } from "./profileIcons";

export const VerificationImages: FC<VerificationImagesProps> = ({ step, isVerified }: VerificationImagesProps) => {
    console.log("inside", step, isVerified);

    switch (step) {
        case "email":
            return isVerified ? <EmailVerified /> : <EmailUnverified />;
        case "phone":
            return isVerified ? <PhoneVerified /> : <PhoneUnverified />;
        case "profile":
            return isVerified ? <ProfileVerified /> : <ProfileUnverified />;
        case "document":
        case "documents":
            return isVerified ? <DocumentsVerified /> : <DocumentsUnverified />;
        case "address":
            return isVerified ? <AddressVerified /> : <AddressUnverified />;
        default:
            return null;
    }
};
