/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// A simple Book class
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// Stores all reviews
const reviews = [];
// Adds a new review to the reviews array
function addReview(bookId, rating, comment) {
    reviews.push({ bookId, rating, comment });
}
// Function to display book information
function displayBook(book) {
    const bookList = document.getElementById("book-list");
    if (!bookList)
        return;
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
    bookList.appendChild(bookDiv);
}
// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckIsWUFBWSxZQUFZLElBQUksVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy13ZWJwYWNrLWJvb2t3b3JtLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBBIHNpbXBsZSBCb29rIGNsYXNzXG5jbGFzcyBCb29rIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCB5ZWFyKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgfVxufVxuLy8gU3RvcmVzIGFsbCByZXZpZXdzXG5jb25zdCByZXZpZXdzID0gW107XG4vLyBBZGRzIGEgbmV3IHJldmlldyB0byB0aGUgcmV2aWV3cyBhcnJheVxuZnVuY3Rpb24gYWRkUmV2aWV3KGJvb2tJZCwgcmF0aW5nLCBjb21tZW50KSB7XG4gICAgcmV2aWV3cy5wdXNoKHsgYm9va0lkLCByYXRpbmcsIGNvbW1lbnQgfSk7XG59XG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IGJvb2sgaW5mb3JtYXRpb25cbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2spIHtcbiAgICBjb25zdCBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay1saXN0XCIpO1xuICAgIGlmICghYm9va0xpc3QpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBib29rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib29rRGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxoMj4ke2Jvb2sudGl0bGV9PC9oMj5cclxuICAgIDxwPkJ5ICR7Ym9vay5hdXRob3J9LCAke2Jvb2sueWVhcn08L3A+XHJcbiAgYDtcbiAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbn1cbi8vIENyZWF0ZSBzb21lIGJvb2sgb2JqZWN0c1xuY29uc3QgYm9vazEgPSBuZXcgQm9vayhcIlRoZSBIb2JiaXRcIiwgXCJKLlIuUi4gVG9sa2llblwiLCAxOTM3KTtcbmNvbnN0IGJvb2syID0gbmV3IEJvb2soXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3NcIiwgXCJKLlIuUi4gVG9sa2llblwiLCAxOTU0KTtcbi8vIERpc3BsYXkgdGhlIGJvb2tzIG9uIHRoZSB3ZWJwYWdlXG5kaXNwbGF5Qm9vayhib29rMSk7XG5kaXNwbGF5Qm9vayhib29rMik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=