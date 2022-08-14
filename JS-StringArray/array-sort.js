// sort()
const numbers = [6, 4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['Kabali', 'Josim', 'Razzak', 'Anwor', 'Depjol', 'Badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// reverse 
const reverseFriends = friends.reverse();
// console.log(reverseFriends);

// numbers sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const  sortedBigNum = bigNumbers.sort(function(a, b){ return a - b; });
console.log(sortedBigNum);