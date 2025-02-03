'use strict';

const Dice = require('./dice');

const diceA = new Dice();
const diceB = new Dice();

console.log(diceA.dots);
console.log(diceB.dots);

// console.log(diceA.#upperBound); // cant access the inbound of the dice object

console.log('max:', diceA.maximumValue);
console.log('max:', diceA.minimumValue);

console.log(diceA.toString());
console.log('diceB:' + diceB);

console.log(`DiceA: ${diceA}, DiceB: ${diceB}`); // automatically part of the string
diceA.roll();
diceB.roll();
console.log(`DiceA: ${diceA}, DiceB: ${diceB}`);

console.log('************'); // separate the output

if (diceA.dots > diceB.dots) {
    console.log('A wins');
}
else if (diceB.dots > diceA.dots) {
    console.log('B wins');
}
else {
    console.log('It is a tie');
}

console.log('************'); // separate the output

const diceArray = [new Dice(), new Dice(), new Dice()];
diceArray.forEach(dice => console.log(dice.toString()));
// diceArray.forEach(dice=>dice.roll());
diceArray.forEach(dice => console.log(dice.toString()));