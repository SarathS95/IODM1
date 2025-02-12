let players = ['Mo Salah', 'Zlatan Ibrahamovic', 'Pep Guardiola', 'Sadio Mane', 'Marcus Rashford'];
console.log(players); // ['Mo Salah', 'Zlatan Ibrahamovic', 'Pep Guardiola', 'Sadio Mane', 'Marcus Rashford']

players[0] = 'Cristiano Ronaldo'; //['Mo Salah', 'Cristiano Ronaldo', 'Pep Guardiola', 'Sadio Mane', 'Marcus Rashford']
console.log(players);

players[3] = 'David Beckham'; //['Mo Salah', 'Cristiano Ronaldo', 'Pep Guardiola', 'Sadio Mane', 'David Beckham']
console.log(players);

players.unshift('Sergio Ramos'); //['Sergio Ramos','Mo Salah', 'Cristiano Ronaldo', 'Pep Guardiola', 'Sadio Mane', 'David Beckham']
console.log(players);

let lastplayers = players.pop(); //['Sergio Ramos','Mo Salah', 'Cristiano Ronaldo', 'Pep Guardiola', 'Sadio Mane',]
console.log(players);
