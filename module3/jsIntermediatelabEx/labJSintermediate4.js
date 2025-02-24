// // Write a function camelCase(cssProp) that changes dash-separated CSS properties like 
// // 'margin-left' into camel-cased 'marginLeft'. 
// The function should remove all dashes, and uppercase the first letter of each word after a 
// dash. 
// function camelCase(cssProp){
//     return cssProp
//     .split('-')
//     .map((word, index) => index === 0 ? word : word.charAt(0) + word.slice(1))
//     .join('');
   
// }
function camelCase(cssProp) {
    let words = cssProp.split('-');
    let result = '';
    words.forEach((word, index) => {
        result += index === 0? word : word[0] + word.slice(1);

    });
    return result;
}
// b) Create variants of the camelCase function that use different types of for loops, and 


console.log(camelCase ("margin-left"))
console.log(camelCase('background-image'))
console.log(camelCase('display'))