// 29-4
function megaFriend(friends) {
    // check input element is array or not 
    if (Array.isArray(friends) == false) {
        return 'false input.';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['Kalam', 'Salam', 'Mumin', 'Maruf', 'Lion', 'Mustakim'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);


// indexOf()
if (friends.indexOf('Lion') != -1) {
    // console.log('Hi Lion');
} else {
    // console.log('nothing found');
}

// includes()
for(const friend of friends){
    const friendCase = friend.toLowerCase();
    console.log(friendCase);
    if(friendCase.includes('lion')){
     console.log('Loin found');
    }
}


// concat
const first = [1,2,5];
const second = [11,12,15];
const concatItems = first.concat(second);
console.log(concatItems);