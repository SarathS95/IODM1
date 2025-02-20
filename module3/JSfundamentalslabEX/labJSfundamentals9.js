// Use the following variables to understand how JavaScript stores objects by reference.

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
let moreSports = teamSports;
moreSports.push('boxing', 'football', 'Muay Thai');
// console.log(teamSports)

// Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = dog1;
dog2= 'Jack';
// console.log(dog2)

//Create a new cat2 variable equal to cat1 and change its name property
let cat2 = cat1;
cat2.name = 'fireball';
// console.log(cat2)

// Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
console.log(teamSports); //yes, stored by reference
console.log(dog1); //no, stored by value
console.log(cat1); // yes stroed by reference

// Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent**