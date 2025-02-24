// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function ucFirstLetters(Cap_letter) {
    let los = Cap_letter.split(' ');
    let city = ''
    for (let name of los) {
        if (city.length != 0) {
            city += ' '
        }
        city += name.charAt(0).toUpperCase() + name.substring(1)
    }
    return city

} 

console.log(ucFirstLetters("los angeles") ) //Los Angeles
