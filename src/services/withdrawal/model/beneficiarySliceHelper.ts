import { IBeneficiary } from "../api/types";

export const updateBeneficiaryItem = (beneficiaries: IBeneficiary[], newBeneficiary: IBeneficiary) => {
    return beneficiaries.map((beneficiary) => {
        if (beneficiary.id === newBeneficiary.id) {
            return {
                ...beneficiary,
                state: newBeneficiary.state,
            };
        }
        return beneficiary;
    });
};

export const addBeneficiaryItem = (beneficiaries: IBeneficiary[], newBeneficiary: IBeneficiary) => {
    return [newBeneficiary, ...beneficiaries];
};
