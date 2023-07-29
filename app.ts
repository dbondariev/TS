type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combinedNames = combine("Sabina", "Dima");
console.log(combinedNames);
