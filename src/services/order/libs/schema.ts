import { object, string, z, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const orderSchema = object({
    type: z.string().min(1, "Side is required"),
    side: z.string().min(1, "Side is required"),
    amount: z.string(),
    price: z.string(),
    market: z.string(),
});

export const OrderResolver = zodResolver(orderSchema);

export type OrderType = TypeOf<typeof orderSchema>;
