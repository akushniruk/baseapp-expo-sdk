export const getTotalPrice = (amount: string, priceMarket: number, proposals: string[][]) => {
    if (proposals.length === 0 || proposals.some((p) => p.length < 2)) {
        return Number(amount) * priceMarket;
    }

    let remainingAmount = Number(amount);
    let total = 0;

    for (const proposal of proposals) {
        const [price, quantity] = proposal;
        const proposalPrice = Number(price);
        const proposalQuantity = Number(quantity);

        if (remainingAmount <= proposalQuantity) {
            total += remainingAmount * proposalPrice;
            remainingAmount = 0;
            break;
        } else {
            total += proposalQuantity * proposalPrice;
            remainingAmount -= proposalQuantity;
        }
    }

    if (remainingAmount > 0 && proposals.length >= 1) {
        const lastPrice = Number(proposals[proposals.length - 1][0]);
        total += lastPrice * remainingAmount;
    }

    return total;
};
