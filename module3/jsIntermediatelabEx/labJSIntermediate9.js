// 9. Given the below salaries object, perform the following tasks. 
let salaries = { 
"Timothy" : 35000, 
"David" : 25000, 
"Mary" : 55000, 
"Christina" : 75000, 
"James" : 43000 
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries 
function sumSalaries(salaries){
    return salaries["Timothy"] + salaries["David"] +salaries["Mary"] + salaries["Christina"] + salaries["James"] 
}
console.log(sumSalaries(salaries))

// b) Write a function topEarner(salaries) that calculates and returns the name of the person 
// earning the highest salary 
function topEarner(salaries) {
    let highSalary = 0
    let highEarner = ""
   for (let name in salaries) {
    // console.log(salaries[value])
    if (salaries[name] > highSalary){
        highSalary = salaries[name]
    highEarner = name}
    }
    // return highSalary
    return highEarner 
}
console.log(topEarner(salaries))