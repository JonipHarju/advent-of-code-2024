import input from "./input2.js";

const inputArray = input.split("\n");

const listA = [];
const listB = [];

inputArray.forEach((line) => {
  const splittedLine = line.split(" ");

  listA.push(Number(splittedLine[0]));
  listB.push(Number(splittedLine[3]));
});

const similarityArray = [];

for (let i = 0; i < listA.length; i++) {
  let currentElementA = listA[i];

  let duplicates = 0;

  for (let x = 0; x < listB.length; x++) {
    let currentElementB = listB[x];

    if (currentElementA === currentElementB) duplicates++;
  }

  similarityArray.push(currentElementA * duplicates);
}

const similarityScore = similarityArray.reduce((partial, a) => partial + a, 0);

console.log(similarityScore);
