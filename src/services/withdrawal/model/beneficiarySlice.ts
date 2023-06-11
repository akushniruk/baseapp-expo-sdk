import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBeneficiary } from "../api/types";

// REFACTOR: KEEP ONLY list and beneficiary in the state;
export interface BeneficiaryState {
    list: IBeneficiary[];
    createdBeneficiary: IBeneficiary | null;
    beneficiary: IBeneficiary | null;
}

export const initialState: BeneficiaryState = {
    list: [],
    createdBeneficiary: null,
    beneficiary: null,
};

export const beneficiary = createSlice({
    initialState,
    name: "beneficiary",
    reducers: {
        setBeneficiaryList: (state: BeneficiaryState, action: PayloadAction<IBeneficiary[]>) => {
            state.list = action.payload;
        },
        setCreatedBeneficiary: (state: BeneficiaryState, action: PayloadAction<IBeneficiary | null>) => {
            state.createdBeneficiary = action.payload;
        },
        setBeneficiary: (state: BeneficiaryState, action: PayloadAction<IBeneficiary | null>) => {
            state.createdBeneficiary = action.payload;
        },
    },
});

export const { setBeneficiaryList, setBeneficiary, setCreatedBeneficiary } = beneficiary.actions;
