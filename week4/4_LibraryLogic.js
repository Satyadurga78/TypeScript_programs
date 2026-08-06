"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryRental = void 0;
const _4_Constants_1 = require("./4_Constants");
class LibraryRental {
    constructor(book, securityDeposit, memberId) {
        this.book = book;
        this.securityDeposit = securityDeposit;
        this.memberId = memberId;
    }
    calculateTotalRent() {
        const days = this.book.rentalDays ?? 1;
        return (days * _4_Constants_1.RENT_PER_DAY) + _4_Constants_1.LATE_FINE + this.securityDeposit;
    }
    printReceipt() {
        console.log("------ Library Rental Receipt ------");
        console.log(`Book Title : ${this.book.title}`);
        console.log(`Author     : ${this.book.author}`);
        console.log(`Member ID  : ${this.memberId}`);
        console.log(`Rental Days: ${this.book.rentalDays}`);
        console.log(`Total Amount: ₹${this.calculateTotalRent()}`);
        console.log("------------------------------------");
    }
}
exports.LibraryRental = LibraryRental;
