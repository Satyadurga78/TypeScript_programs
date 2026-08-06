class LibraryMember {
    memberName: string;
    membershipFee: number;
    discountRate: number;
    membershipYears: number;

    constructor(name: string, fee: number, discount?: number, years?: number) {
        this.memberName = name;
        this.membershipFee = fee;
        this.discountRate = discount ?? 5;
        this.membershipYears = years ?? 1;
    }

    calculateTotalFee(): number {
        const discountAmount =
            (this.membershipFee * this.discountRate * this.membershipYears) / 100;
        return this.membershipFee - discountAmount;
    }

    displayDetails(): void {
        console.log("----- Library Membership -----");
        console.log(`Member Name: ${this.memberName}`);
        console.log(`Membership Fee: ${this.membershipFee}`);
        console.log(`Discount Rate: ${this.discountRate}%`);
        console.log(`Membership Years: ${this.membershipYears}`);
        console.log(`Total Fee After Discount: ${this.calculateTotalFee()}`);
        console.log("------------------------------\n");
    }
}

const regularMember = new LibraryMember("Ananya", 3000);
const premiumMember = new LibraryMember("Rahul", 5000, 10, 2);

regularMember.displayDetails();
premiumMember.displayDetails();

premiumMember.membershipFee = 6000;
console.log(
    `Updated Total Fee for Rahul: ${premiumMember.calculateTotalFee()}`
);