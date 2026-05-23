const books = [
  {
    title: "Things Fall Apart",
    authorName: "Chinua Achebe",
    releaseYear: 1958,
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter((book) => {
  return book.releaseYear <= 1950;
});

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
