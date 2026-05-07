export class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Title must be a non-empty string");
    }
    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Author must be a non-empty string");
    }
    this.#author = value.trim();
  }

  get year() {
    return this.#year;
  }

  set year(value) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < 1450 || value > currentYear) {
      throw new Error(
        `Year must be an integer between 1450 and ${currentYear}`
      );
    }
    this.#year = value;
  }

  printInfo() {
    console.log(`📖 "${this.#title}" by ${this.#author} (${this.#year})`);
  }

  static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Array is empty or not an array");
    }
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}
