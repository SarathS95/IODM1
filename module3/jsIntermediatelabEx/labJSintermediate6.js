// 6. Create a function unique(duplicatesArray) which takes an array parameter that may 
// include duplicates. Your function should return an array containing only the unique values 
// from duplicatesArray.  
// Test with the following arrays and create another one of your own. 

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
function unique(duplicatesArray) {
    const duplicColours = []
    duplicatesArray.forEach(colours => { 
        if (!duplicColours.includes(colours)){
            duplicColours.push(colours)
        }
        
    });
    return duplicColours
}

// function unique(duplicatesArray) {
//     return Array.from(new Set(duplicatesArray))
// }


const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
function uniqueNum(duplicatesArray){
return Array.from(new Set(duplicatesArray))
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ] 