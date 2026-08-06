import { Book } from "./4_Book";
import { LibraryRental } from "./4_LibraryLogic";

const book: Book = {
    title: "Atomic Habits",
    author: "James Clear",
    rentalDays: 5
};

const rental = new LibraryRental(book, 100, 101);

rental.printReceipt();