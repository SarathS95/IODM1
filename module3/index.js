//FOr LOOP
let goal = 5;
for (let i = 0; i < goal; i++) {
// console.log(`Iteration ${i} of ${goal}`)
} 

//Object Iteration
 const phone = {
    model: 'iPhone 11',
    colour: 'black',
    storage: 64
}
for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
    console.log('key: ' + key); // prints each object property name (key) in turn
    // console.log('value: ' + phone[key]); // prints each object value in turn
}

//object References
let person1 = { name: 'Anna' }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = 'Brian';
// console.log(person2.name); // Brian, even though we changed person1.name
let person3 = 'Carly'; // string - stored by value
let person4 = person3; // person4 points to separate memory location than person3, but both store same value
person3 = 'David';
// console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values


// const products = [
//     { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
//     { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
//     { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
//     { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
//     ]
//     // we usually use an arrow function - runs once for each element, returns array of matches
//     let shirts = products.filter(price => price.category == 'Shirts')
//     let under50 = products.filter(product => product.price < 50)
    // console.log(shirts) // 2 matching items in shirts array
    // console.log(under50) // 3 matching items in under50 array


    products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1
const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]