import { Book } from "./Book.js";

export class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a non-empty string");
    }
    this.#fileFormat = value.trim();
  }

  printInfo() {
    super.printInfo();
    console.log(`   Format: ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
