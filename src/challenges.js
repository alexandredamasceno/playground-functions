// Desafio 1
function compareTrue(valueOne, valueTwo) {
  return valueOne === true && valueTwo === true;
};
//console.log(compareTrue(false, false));

// Desafio 2
function calcArea(width, height) {
  return (width * height) / 2;
}
//console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(phrase) {
  let charArray = phrase.split(" ");
  return charArray;
}
//console.log(splitSentence("vamo que vamo"));


// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
//let exempleArray = ['captain', 'my', 'captain'];
//console.log(concatName(exempleArray));


// Desafio 5
function footballPoints(wins, ties) {
  let victorys = wins * 3;
  let allTies = ties * 1;
  return victorys + allTies;
}
//console.log(footballPoints(14, 8));


// Desafio 6
function highestCount(arrayNumbers) {
  let objectNumbers = {};
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    objectNumbers[arrayNumbers[index]] = 0;
    for (let indexB = 0; indexB < arrayNumbers.length; indexB += 1) {
      if (arrayNumbers[indexB] === arrayNumbers[index]) {
        objectNumbers[arrayNumbers[index]] += 1;
      }
    }
  }
  let arrayValues = Object.entries(objectNumbers);
  let highest = arrayValues[0][0];
  for (let index = 0; index < arrayValues.length; index += 1) {
    if (arrayValues[index][0] >= highest) {
      highest = arrayValues[index];
    }
  }
  return highest[1];

}
//let arrayNum = [1, 1, 1, 1];
//console.log(highestCount(arrayNum));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  if (cat1Position < 0) {
    cat1Position = cat1Position * -1;
  }
  let cat2Position = mouse - cat2;

  if (cat2Position < 0) {
    cat2Position = cat2Position * -1;
  }
  let catWinner;
  if (cat1Position > cat2Position) {
    catWinner = "cat1";
  } else if (cat2Position > cat1Position) {
    catWinner = "cat2";
  } else {
    catWinner = "Os gatos trombam e o rato foge";
  }
  return catWinner;
}
//console.log(catAndMouse(10, 8, 12));


// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      newArray.push("fizz");
    } else if (array[index] % 5 === 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}
//let arrayNumbers = [9, 25];
//console.log(fizzBuzz(arrayNumbers));

// Desafio 9 "hi there!". a -> 1 e -> 2 i -> 3 o -> 4 u -> 5
function encode(string) {
  let charArray = string.split("");
  let newCharArray = [["a", 1], ["e", 2], ["i", 3], ["o", 4], ["u", 5]];
  for (let indexA = 0; indexA < charArray.length; indexA += 1) {
    for (let indexB = 0; indexB < newCharArray.length; indexB += 1) {
      if (charArray[indexA] === newCharArray[indexB][0]) {
        charArray[indexA] = newCharArray[indexB][1];
      }
    }
  }
  return charArray.join("");
}
console.log(encode("hi there!"));

// h3 th2r2!
function decode(string) {
  let charArray = string.split("");
  let newCharArray = [["1", "a"], ["2", "e"], ["3", "i"], ["4", "o"], ["5", "u"]];
  for (let indexA = 0; indexA < charArray.length; indexA += 1) {
    for (let indexB = 0; indexB < newCharArray.length; indexB += 1) {
      if (charArray[indexA] === newCharArray[indexB][0]) {
        charArray[indexA] = newCharArray[indexB][1];
      }
    }
  }
  return charArray.join("");
}
console.log(decode("h3 th2r2!"));

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
