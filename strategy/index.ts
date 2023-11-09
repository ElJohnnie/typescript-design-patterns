interface PaymentMethod {
    calculateCost(distance: number): number;
    taxationRate: number;
}

interface PurchaseProps {
    paymentCalculator: () => PaymentMethod;
    distance: number;
}

class Correios implements PaymentMethod {
    taxationRate = 10;
    calculateCost(distance: number): number {
        return distance + 3;
    }
}

class DPD implements PaymentMethod {
    taxationRate = 10;
    calculateCost(distance: number): number {
        return distance + 8;
    }
}

class Purchase {
    constructor(private purchaseProps: PurchaseProps) {}

    calculateCost(distance: number) {
        const Calculator = this.purchaseProps.paymentCalculator();
        return Calculator.calculateCost(distance);
    }
}

// Empregabilidade
const purchase = new Purchase({
    paymentCalculator: () => new Correios(),
    distance: 100, // You need to provide a distance value here
});

const cost = purchase.calculateCost(200);
console.log(cost);
