// slice() -> array slice()
const numbers = [3, 4, 5, 16, 7, 8,  53, 25, 75, 86];
const numberSliced = numbers.slice(2);
const numberSlicedagain = numbers.slice(5, 9);
/* console.log(numberSliced);
console.log(numberSlicedagain); */

// spliced()
// const numberSpliced = numbers.splice(2, 5);
// console.log(numberSpliced);
// console.log(numbers);

// const numberSpliced2 = numbers.splice(4, 3, 99, 888, 777);
// console.log(numberSpliced2);
// console.log(numbers);

const practice = numbers.splice(4, 0, 100);
console.log('Slice',practice);
console.log(numbers);

// splice() -> need to learn more