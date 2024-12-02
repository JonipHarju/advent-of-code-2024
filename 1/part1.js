import input from "./input1.js";

const inputArray = input.split("\n");

const listA = [];
const listB = [];

inputArray.forEach((line) => {
  const splittedLine = line.split(" ");

  listA.push(Number(splittedLine[0]));
  listB.push(Number(splittedLine[3]));
});

const sortedA = listA.sort();
const sortedB = listB.sort();

const distanceList = [];

for (let i = 0; i < sortedA.length; i++) {
  const numberA = sortedA[i];
  const numberB = sortedB[i];

  if (numberA > numberB) {
    distanceList.push(numberA - numberB);
  } else if (numberA < numberB) {
    distanceList.push(numberB - numberA);
  } else {
    distanceList.push(0);
  }
}

let counter = 0;

for (let index = 0; index < distanceList.length; index++) {
  counter += distanceList[index];
}

console.log(counter);
