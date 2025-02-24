// Use the following animals array for the below tasks. Test each one by printing the result to
// the console.

const animals = ['Tiger', 'Giraffe']
// a) Add 2 new values to the end
animals.push('Lion', 'Koala');
// b) Add 2 new values to the beginning
animals.unshift('Kiwi', 'Panda');
//Sort the values alphabetically
animals.sort();
// Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
    let middleAnimal = animals.length / 2
    animals.splice(middleAnimal, 1, newValue)
    return animals
}
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array 
// containing all the animals that begin with the beginsWith string. Try to make it work 
// regardless of upper/lower case. 
function findMatchingAnimals(beginsWith){
    let matchAnimals = animals.filter(animal => animal.toLowerCase().startsWith(beginsWith));
    return matchAnimals;
}

console.log(animals)
console.log(replaceMiddleAnimal('Dog'));
console.log(findMatchingAnimals); //getting wrong output

