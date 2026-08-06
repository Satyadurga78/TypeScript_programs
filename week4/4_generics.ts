// Generic Class

class PackageBox<T> {

    private item: T;

    constructor(product: T) {
        this.item = product;
    }

    public getItem(): T {
        console.log("Opening package...");
        return this.item;
    }

    public replaceItem(newItem: T): void {
        this.item = newItem;
        console.log("Package updated successfully.");
    }
}

// ---------- Usage ----------

// Electronics
const phonePackage = new PackageBox<string>("Samsung S24");
console.log("Product:", phonePackage.getItem());

// Grocery
const groceryPackage = new PackageBox<string>("Basmati Rice 5kg");
console.log("Product:", groceryPackage.getItem());

// Custom Object
interface Laptop {
    brand: string;
    ram: number;
}

const laptopPackage = new PackageBox<Laptop>({
    brand: "HP",
    ram: 16
});

console.log("Laptop Brand:", laptopPackage.getItem().brand);

phonePackage.replaceItem("iPhone 16");
console.log("Updated Product:", phonePackage.getItem());