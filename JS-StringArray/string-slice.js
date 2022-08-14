const anthem = 'Amar Shonar Bangla Ami Tomay Valobashi';
// split()
const words = anthem.split(' ');
const withoutA = anthem.toLowerCase().split('a');
// console.log(withoutA);

// slice()
const starsAfterFive = anthem.slice(5);
const starsAfter18 = anthem.slice(18);
const smallSlice = anthem.slice(5, 8)
// console.log(starsAfterFive);
// console.log(starsAfter18);
console.log(smallSlice);


// substr()
const anotherPart = anthem.substr(5, 3);
console.log(anotherPart);