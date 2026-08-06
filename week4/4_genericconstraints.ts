// Generic Constraint

interface HasPrice {
    price: number;
}

function printPrice<T extends HasPrice>(item: T): number {
    return item.price;
}

// Product Objects
const mobile = {
    brand: "Samsung",
    model: "S24",
    price: 75000
};

const laptop = {
    brand: "HP",
    processor: "Intel i5",
    price: 62000
};

console.log(`Mobile Price: ₹${printPrice(mobile)}`);
console.log(`Laptop Price: ₹${printPrice(laptop)}`);

// Generic Function
function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const fruits = ["Apple", "Mango", "Orange"];
const marks = [95, 88, 91];

console.log(`First Fruit: ${getFirstItem(fruits)}`);
console.log(`First Mark: ${getFirstItem(marks)}`);

// Generic Wrapper
function packItem<T>(item: T): { product: T; packedOn: Date } {
    return {
        product: item,
        packedOn: new Date()
    };
}

const packedMobile = packItem(mobile);

console.log(
    `Packed Product: ${packedMobile.product.brand} at ${packedMobile.packedOn}`
);