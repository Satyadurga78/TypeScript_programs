function welcomeCustomer(name: string): string {
    return `Welcome, ${name}!`;
}

function getDeliveryCity(city: string = "Bengaluru"): string {
    return `Delivery City: ${city}`;
}

function placeOrder(orderId: number, note?: string): void {
    console.log(`Order ID: ${orderId}`);

    if (note) {
        console.log(`Special Note: ${note}`);
    }
}

function calculateBill(...prices: number[]): number {
    return prices.reduce((total, price) => total + price, 0);
}

console.log(welcomeCustomer("Akhila"));

console.log(getDeliveryCity());
console.log(getDeliveryCity("Visakhapatnam"));

placeOrder(1025);
placeOrder(1026, "Please deliver before 6 PM");

const totalBill = calculateBill(499, 299, 799, 150);
console.log(`Total Bill: ₹${totalBill}`);