// Desafio 10
function techList(array, name) {
  if (array.length == 0) {
    return "Vazio!";
  }
  let arrayOrdenado = array.sort();
  let newArrayObject = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    newArrayObject.push({
      tech: arrayOrdenado[index],
      name: name,
    });
  }
  return newArrayObject;
}
//console.log(techList([], "Alexandre"));

// Desafio 11 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
function generatePhoneNumber(array) {
  if (array.length < 11 || array.length > 11) {
    return "Array com tamanho incorreto.";
  }
  for (let indexA = 0; indexA < array.length; indexA += 1) {
    let countTimes = 0;
    if (array[indexA] < 0 || array[indexA] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    };
    for (let indexB = 0; indexB < array.length; indexB += 1) {
      if (array[indexB] == array[indexA]) {
        countTimes += 1;
      };
    };
    if (countTimes >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let aPlusB = lineA + lineB;
  let bPlusC = lineB + lineC;
  let aPlusC = lineA + lineC;
  let aSubB = Math.abs(lineA - lineB);
  let bSubC = Math.abs(lineB - lineC);
  let aSubC = Math.abs(lineA - lineC);
  if ((lineA < bPlusC && lineA > bSubC) && (lineB < aPlusC && lineB > aSubC) && (lineC < aPlusB && lineC > aSubB)) {
    return true;
  } else {
    return false;
  }
}
//console.log(triangleCheck(10, 14, 8));


// Desafio 13 - Usando expressões regulares(REGEX) = sequência de texto, comumente utilizado para validação, para encontrar ou texto/caracteres dentre desse texto, encontrar posições desses caracteres no texto, dentre outros.
function hydrate(string) {
  let arrayString = string.match(/\d+/g); // essa expressão regular busca somente caracteres numerais de 0 a 9.
  let arrayStringNumbers = [["0", 0], ["1", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9]];
  let sum = 0;
  for (let indexA = 0; indexA < arrayString.length; indexA += 1) {
    for (let indexB = 0; indexB < arrayStringNumbers.length; indexB += 1) {
      if (arrayString[indexA] === arrayStringNumbers[indexB][0]) {
        sum += arrayStringNumbers[indexB][1];
      }
    }
  }
  let result = sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
  return result;
}
let str = "1 cachaça";
console.log(hydrate(str));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
