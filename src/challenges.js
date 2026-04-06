// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // seu código aqui
  return valueOne === true && valueTwo === true;
};
//console.log(compareTrue(false, false));

// Desafio 2
function calcArea(width, height) {
  // seu código aqui
  return (width * height) / 2;
}
//console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let charArray = phrase.split(" ");
  return charArray;
}
//console.log(splitSentence("vamo que vamo"));


// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}
//let exempleArray = ['captain', 'my', 'captain'];
//console.log(concatName(exempleArray));


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victorys = wins * 3;
  let allTies = ties * 1;
  return victorys + allTies;
}
console.log(footballPoints(14, 8));


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
