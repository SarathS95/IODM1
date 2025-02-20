// The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

function printcity(city) {
    for (let key in city) {
        console.log(`${key}:${city[key]}`);
    }
}
printcity(sydney);

// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const brunei_darussalam = {
    name: 'Seria',
    population: 4_554,
    district: 'KB',
    type: 'Monarch',
    timezone: 'BNT UTC+8'
}

function printproperty(info) {
    for(let key in info) {
        console.log(`${key}:${info[key]}`);
    }
}
printproperty(brunei_darussalam);