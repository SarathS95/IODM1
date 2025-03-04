const DateTime = luxon.DateTime;
function getTime() {
    // create a shortcut and a new Luxon date
    const DateTime = luxon.DateTime;
    let nowLuxon = DateTime.now();
   
    let eDisplayLuxon = document.getElementById('displayLuxon');
    eDisplayLuxon.innerHTML = `<p>Unformatted date: ${nowLuxon}</p>`;
   
    let formatted = nowLuxon.toFormat('MMMM dd, yyyy');
    eDisplayLuxon.innerHTML += `<p>Formatted date: ${formatted}</p>`;
    let london = 
  nowLuxon.setZone('Europe/London').toLocaleString(DateTime.DATETIME_FULL);
    eDisplayLuxon.innerHTML += `<p>London date: ${london}</p>`;
   };
// Number5
   getTime()  

// // 1)Calculate the number of days between 
// // your birthdate and the current date
// let birthdate = DateTime.fromISO('1995-04-23')
// let todayLuxon = DateTime.now();

// let date1=  DateTime.fromISO('1995-04-23');
// let date2= DateTime.now();
// let total_days= todayLuxon.diff(birthdate, 'days').values.days;
// console.log(Math.round(total_days))
// // total_days.toObject();

let eDisplayLuxon = document.getElementById('displayLuxon');
//     eDisplayLuxon.innerHTML = `<p>Unformatted date: ${birthdate}</p>`;


    // todayLuxon.setlocale('Pacific/Auckland').toLocaleString(DateTime.DATETIME_FULL);
    // eDisplayLuxon.innerHTML += `<p>I have : ${Math.round(total_days)} for my birthday</p>`;

//  Display the number of years, months, 
// and days between your birthdate and 
// current date
let birthdate = DateTime.fromISO('1995-04-23')
let todayLuxon = DateTime.now()

let date1=  DateTime.fromISO('1995-04-23');
let date2= DateTime.now();
let total_days= todayLuxon.diff(birthdate, ['days', 'years', 'months']).values;
console.log(total_days)

eDisplayLuxon.innerHTML += `<p>I have : ${Math.round(total_days.days)} days, ${total_days.years} years, ${total_days.months} months for my birthday</p>`;



