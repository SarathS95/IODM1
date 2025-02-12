//Creating a json object variable for a book.
const book ={
    "title" : "Made to Stick",
    "description" : "Chip and Dan Heath reveal the anatomy of ideas that stick and explain ways to make ideas stickier, such as applying the human scale principle, using the Velcro Theory of Memory, and creating curiosity gaps.",
    "author" : "Robin Hobson",
    "book_Pages" : "390"
}

//Printing objects property values individually.
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.book_Pages);

//Printing objects property values whole.
console.log(book);

//Updating description of the book.
book.description = 'Chip and Dan Heath explore what makes ideas memorable, sharing techniques like the human scale principle, Velcro Theory of Memory, and curiosity gaps to enhance stickiness.';
console.log(book);