// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the 
// following: 
let twentyCents = 0.20 
let tenCents = 0.10 
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)  
// 0.2 + 0.1 = 0.30000000000000004 

// We can sometimes avoid this using the toFixed function to force the number of decimal 
// places as below, but it’s not always useful: 
let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen) //why is this not working? 

// a) Explain why the above code returns the wrong answer 
console.log(typeof twentyCents.toFixed(2)); 
console.log(typeof tenCents.toFixed(2));
// Becase it turns out as string.

// b) Create a function currencyAddition(float1, float2) which safely adds the two 
// decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
    let result = (float1 * 100 + float2 * 100) / 100
    return result.toFixed(2);
}
console.log(currencyAddition(1.5, 3.9));

