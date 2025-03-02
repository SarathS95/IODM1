// The following car object has several properties and a method which uses them to print a 
// description. When calling the function normally this works as expected, but using it from 
// within setTimeout fails. Why? 


// a) Fix the setTimeout call by wrapping the call to car.description() inside a 
// function
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

description() {
    console.log(`This car is a ${this.make} ${this.model} from${this.year}`);
}
};

// car.description();
// setTimeout(() => car.description(), 300);

// b) Change the year for the car by creating a clone of the original and overriding it
let newYear = {...car, year: 2001};
// newYear.description();
// setTimeout(() => newYear.description(), 300);

// Change another property of the car by creating a clone and overriding it, and test that 
// setTimeout still uses the bound value from d)
let newCar = {...car, make: "Rolls Royce", model: "Spectre", year: 2023, description: car.description};
car.description();
newCar.description()
 
setTimeout(car.description.bind(car), 300);
setTimeout(newCar.description.bind(newCar), 700);
