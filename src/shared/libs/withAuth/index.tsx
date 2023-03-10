import { useAppSelector } from "../../providers/redux/lib/useAppSelector";
import React, { useEffect } from "react";

export const withAuth = (Component: React.FC) => (props: any) => {
    const user = useAppSelector((state) => state.user.profile);

    useEffect(() => {
        if (!user?.uid) {
            props.navigation.navigate("Login");
        }
    }, [user]);

    if (user?.uid) {
        return <Component {...props} />;
    }

    return null;
};
