import { useAppSelector } from "../../providers/redux/lib/useAppSelector";
import React, { useEffect } from "react";

export const withAuth =
    (Component: React.FC, redirectToAuth: () => void) => (props: any) => {
        const user = useAppSelector((state) => state.user.user);

        useEffect(() => {
            if (!user.id) {
                redirectToAuth();
            }
        }, [user]);

        if (user.id) {
            return <Component {...props} />;
        }

        return null;
    };
