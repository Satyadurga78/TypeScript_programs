import { RENT_PER_DAY, LATE_FINE } from "./4_Constants";
import { Book } from "./4_Book";

export class LibraryRental {

    constructor(
        public book: Book,
        private securityDeposit: number,
        public memberId: number
    ) { }

    public calculateTotalRent(): number {
        const days = this.book.rentalDays ?? 1;
        return (days * RENT_PER_DAY) + LATE_FINE + this.securityDeposit;
    }

    public printReceipt(): void {
        console.log("------ Library Rental Receipt ------");
        console.log(`Book Title : ${this.book.title}`);
        console.log(`Author     : ${this.book.author}`);
        console.log(`Member ID  : ${this.memberId}`);
        console.log(`Rental Days: ${this.book.rentalDays}`);
        console.log(`Total Amount: ₹${this.calculateTotalRent()}`);
        console.log("------------------------------------");
    }
}