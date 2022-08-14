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
// console.log(smallSlice);


// substr()
const anotherPart = anthem.substr(5, 3);
// console.log(anotherPart);

// substring
const anotherPartWithSubString = anthem.substring(5, 10);
// console.log(anotherPartWithSubString); 


// concat 
const first = 'amader';
const second = 'city';
const fullString = first + second;
// concat 
const concatString = first.concat(' ', second).concat(' ABC');
console.log(fullString);
console.log(concatString);

// join words
const onkWords = ['alim', 'badhon','cameron', 'dhaka', 'Edaning'];
const allJoined = onkWords.join(' ');
console.log(allJoined);