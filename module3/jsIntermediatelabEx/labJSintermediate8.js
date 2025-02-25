// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF = new Map()
phoneBookDEF.set('David', '0123456789')
phoneBookDEF.set('Emily', '0987654321')
phoneBookDEF.set('Fahad', '2345678912')

// console.log(phoneBookABC)
// console.log(phoneBookDEF)

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0953456793');
// console.log(phoneBookABC)

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhoneBook(contacts){
    for(let name of contacts) {
        console.log(name)
    }
}
printPhoneBook(phoneBookABC, phoneBookDEF)

// e) Combine the contents of the two individual Maps into a single phoneBook Map 
//f) Print out the full list of names in the combined phone book 
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])
console.log(phoneBook)


