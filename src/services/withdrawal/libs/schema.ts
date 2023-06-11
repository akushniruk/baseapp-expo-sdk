import { object, string, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const createBeneciarySchema = object({
    address: string().min(1, "Address is required"),
    name: string().min(1, "Name is required"),
    description: string().optional(),
    // address should be stored in data field
    // address: string().min(1, "Address is required"),
});

export const CreateBeneficiaryResolver = zodResolver(createBeneciarySchema);

export type CreateBeneficiaryType = TypeOf<typeof createBeneciarySchema>;
