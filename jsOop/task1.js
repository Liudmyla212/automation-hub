import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

console.log("--- All books ---");
const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book("The Pragmatic Programmer", "Andy Hunt", 1999);
const book3 = new Book("Don Quixote", "Miguel de Cervantes", 1605);
const ebook1 = new EBook("You Don't Know JS", "Kyle Simpson", 2015, "epub");

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

console.log("\n--- Validation works ---");
try {
  const broken = new Book("", "Some Author", 2020);
} catch (err) {
  console.log("Empty title:", err.message);
}

try {
  const brokenYear = new Book("Test", "Author", 3000);
} catch (err) {
  console.log("Future year:", err.message);
}

try {
  ebook1.fileFormat = "";
} catch (err) {
  console.log("Empty format:", err.message);
}

console.log("\n--- Oldest book ---");
const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.getOldestBook(allBooks);
oldest.printInfo();

console.log("\n--- EBook from Book (factory) ---");
const newEbook = EBook.fromBook(book1, "pdf");
newEbook.printInfo();

console.log("\n--- instanceof ---");
console.log("newEbook instanceof EBook:", newEbook instanceof EBook);
console.log("newEbook instanceof Book:", newEbook instanceof Book);
console.log("book1 instanceof EBook:", book1 instanceof EBook);
