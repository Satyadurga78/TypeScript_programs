let bookTitle: string = "The Alchemist";
let bookPrice: number = 499;
let isAvailable: boolean = true;

console.log("Data Type of Book Title is -->", typeof bookTitle);
console.log("Data Type of Book Price is -->", typeof bookPrice);
console.log("Data Type of isAvailable is -->", typeof isAvailable);

function displayBookDetails(title: string, price: number, available: boolean): void {
    console.log(`Book Title: ${title}`);
    console.log(`Book Price: ₹${price}`);
    console.log(`Available: ${available}`);
}

displayBookDetails(bookTitle, bookPrice, isAvailable);