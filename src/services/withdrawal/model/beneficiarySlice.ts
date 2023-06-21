import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBeneficiary } from "../api/types";
import { addBeneficiaryItem, updateBeneficiaryItem } from "./beneficiarySliceHelper";

// REFACTOR: KEEP ONLY list and beneficiary in the state;
export interface BeneficiaryState {
    list: IBeneficiary[];
    beneficiary: IBeneficiary | null;
}

export const initialState: BeneficiaryState = {
    list: [],
    beneficiary: null,
};

export const beneficiary = createSlice({
    initialState,
    name: "beneficiary",
    reducers: {
        setBeneficiaryList: (state: BeneficiaryState, action: PayloadAction<IBeneficiary[]>) => {
            state.list = action.payload;
        },

        setBeneficiary: (state: BeneficiaryState, action: PayloadAction<IBeneficiary | null>) => {
            state.beneficiary = action.payload;
        },
        updateBeneficiary: (state: BeneficiaryState, action: PayloadAction<IBeneficiary | null>) => {
            state.beneficiary = action.payload;
            state.list = action.payload ? updateBeneficiaryItem(state.list, action.payload) : state.list;
        },
        addBeneficiary: (state: BeneficiaryState, action: PayloadAction<IBeneficiary | null>) => {
            state.beneficiary = action.payload;
            state.list = action.payload ? addBeneficiaryItem(state.list, action.payload) : state.list;
        },
    },
});

export const { setBeneficiaryList, setBeneficiary, updateBeneficiary, addBeneficiary } = beneficiary.actions;
