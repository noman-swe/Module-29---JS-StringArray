// unlimited peramiter handling:::

function addNumbers(num1, num2){
    // console.log(arguments[1]);
    let add = 0;
    for(const argu of arguments){
        console.log(argu);
        add = add + argu;
    }
    // const result = num1 + num2;
    // return result;
    return add;
}

const sum = addNumbers(23, 13, 50, 100, 414);
console.log('sum', sum);

function myFriends(names){
    let friendsName = ' ';
    for(part of arguments){
        friendsName = friendsName + ' ' + part;
    }
    return friendsName;
}

const friends = myFriends('Akib', 'Jabed', 'Mushfik', 'Maruf');
console.log(friends);