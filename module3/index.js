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


