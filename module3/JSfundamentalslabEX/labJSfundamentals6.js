// a) Complete the inigo object by adding a lastName property and including it in the
// greeting.



const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    // getCatchPhrase(person) {
    //     return person.numFingers === 6
    //     ? "YOU KILLED MY FATHER. PREPARE TO DIE!"
    //     : "Nice to meet you."
    // }
    getCatchPhrase:(person) =>
        person.numFingers ===6
    ? "YOU KILLED MY FATHER. PREPARE TO DIE!"
    : "Nice to meet you."

}
    inigo.greeting(westley)
    inigo.greeting(rugen)