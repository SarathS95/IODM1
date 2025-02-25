// 10. The following code uses the Date object to print the current time and the number of hours 
// that have passed today so far. Extend the code to do the following: 
const today = new Date(); 

console.log('Current time is ' + today.toLocaleTimeString()) 
console.log(today.getHours() + ' hours have passed so far today') 

// a) Print the total number of minutes that have passed so far today
const todayMin = (today.getMinutes() + today.getHours() * 60)
console.log(todayMin + 'minutes have gone today');

// b) Print the total number of seconds that have passed so far today 
const todaySec = (today.getSeconds() + today.getMinutes() * 60 + today.getHours() * 3600)
console.log(todaySec + 'Seconds have gone today');

// c) Calculate and print your age as: 'I am x years, y months and z days old' 
function myAge(birthyear) {
const currentYear = new Date().getFullYear();
const age = currentYear - birthyear
console.log(`I am ${age} years old.`)
}
myAge(1995);


