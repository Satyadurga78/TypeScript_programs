class LibraryAccount {
    public memberName: string;
    private fineAmount: number;
    private memberPin: number;
    protected borrowedBooks: number = 0;

    constructor(name: string, fine: number, pin: number) {
        this.memberName = name;
        this.fineAmount = fine;
        this.memberPin = pin;
    }

    public payFine(amount: number, enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            if (this.fineAmount >= amount) {
                this.fineAmount -= amount;
                console.log(`₹${amount} fine paid successfully.`);
                console.log(`Remaining Fine: ₹${this.fineAmount}`);
            } else {
                console.log("Payment exceeds pending fine.");
            }
        } else {
            console.log("Incorrect PIN. Payment failed.");
        }
    }

    private verifyPin(pin: number): boolean {
        return this.memberPin === pin;
    }
}

class PremiumLibraryAccount extends LibraryAccount {
    public borrowBonusBook(): void {
        this.borrowedBooks++;
        console.log(`Bonus Book Borrowed! Total Borrowed Books: ${this.borrowedBooks}`);
    }
}

const account = new LibraryAccount("Sneha", 1000, 5678);

console.log(`Welcome, ${account.memberName}!`);
account.payFine(500, 5678);