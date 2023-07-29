const number: number = 35;
const string: string = "I am a string";
const boolean: boolean = true;

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

let number1 = 5;
const number2 = 2.8;

const printresult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printresult, resultPhrase);
