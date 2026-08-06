"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_LibraryLogic_1 = require("./4_LibraryLogic");
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    rentalDays: 5
};
const rental = new _4_LibraryLogic_1.LibraryRental(book, 100, 101);
rental.printReceipt();