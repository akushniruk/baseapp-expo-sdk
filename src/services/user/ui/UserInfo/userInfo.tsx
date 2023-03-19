import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../../shared";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useMemberMeQuery } from "../../api/peatioMember";
import { Label, User } from "../../api/types";

const kycLabels = ["email", "phone", "profile", "document", "address"];

export const UserInfo: FC = () => {
    useMemberMeQuery();
    const user: User = useAppSelector((state: RootState) => state.user.profile);

    const getVerificationLabel = useMemo(() => {
        if (user?.labels && kycLabels) {
            if (user?.labels.length === kycLabels.length) {
                const verifiedLabels = user?.labels.map(
                    (label: Label, index: number) => {
                        if (
                            label.key === kycLabels[index] &&
                            label.value === "verified"
                        ) {
                            return kycLabels[index];
                        }
                    }
                );

                if (
                    verifiedLabels?.every(
                        (label: string | undefined) => label !== undefined
                    )
                ) {
                    // TODO: add translations
                    return "Verified";
                }
            }

            // TODO: add translations
            return "Unverified";
        }

        return null;
    }, [user?.level]);
    console.log(process.env.REACT_APP_MODE);

    return (
        <View>
            <View>
                <Text>image</Text>
                <View>
                    <Text>{user?.username || user?.uid}</Text>
                    <View>
                        <Text>{getVerificationLabel}</Text>
                        <Text>Fee group</Text>
                    </View>
                </View>
            </View>
            <Text>icon</Text>
        </View>
    );
};

//https://yellowsoftwareexchange.uat.opendax.app/api/v2/peatio/account/members/me
// user fee group
// {"uid":"ID3F850D07D2","email":"akushniruk@openware.com","group":"user-0","beneficiaries_whitelisting":true}
