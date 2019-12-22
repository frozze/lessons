const numOfAttempts = 3;

const database = [{
    username: 'Bobby',
    password: '123',
    currNumOfAttempts: numOfAttempts
}, {
    username: 'Captain_Jack_Sparrow',
    password: 'Rum99bottles',
    currNumOfAttempts: numOfAttempts
}, {
    username: 'great_player',
    password: 'dontmesswithme',
    currNumOfAttempts: numOfAttempts
}, {
    username: 'mr_Bean',
    password: 'supersecret',
    currNumOfAttempts: numOfAttempts
}, {
    username: 'natalie',
    password: 'Good4me',
    currNumOfAttempts: numOfAttempts
}, {
    username: 'Sally',
    password: 'qwerty',
    currNumOfAttempts: numOfAttempts
}];

var newsFeed = [{
    username: 'Bobby',
    timeline: 'So tired from all that learning!'
}, {
    username: 'Sally',
    timeline: 'JavaScript is sooooo cooool!'
}, {
    username: 'mr_Bean',
    timeline: 'ahmmmmmmmm'
}, {
    username: 'Captain_Jack_Sparrow',
    timeline: 'Interesting ...'
}, {
    username: 'Bobby',
    timeline: 'I need a break'
}, {
    username: 'Sally',
    timeline: 'Bobby needs a break. May be he\'s a loop :) :) :)'
}, {
    username: 'Captain_Jack_Sparrow',
    timeline: 'O! I saw something through my loupe lense in the corner of the map. '+
    'Where is this bloody compass again!?'
}];

const userEl = document.getElementById('username');
const passEl = document.getElementById('password');
document.getElementById('submit').addEventListener('click',signIn);
const greetEl = document.querySelector('.greet');
let genNumOfAttempts = numOfAttempts;
let loggedUser, i;


function isUserValid(u,p) {
    /* return database.find(function(user){
        return user.username===u && user.password === p;
    }); */
    for (i=0; i< database.length;i++) {
        
        if (user.username===u && user.password === p) {
            return true;
        } else if (user.username===u) {
            user.currNumOfAttempts--;
            return false;
        } 
    }
    genNumOfAttempts--;
    return false;
}

function signIn() {
    const currUsername = userEl.value;
    const currPassword = passEl.value;

    console.log(`username: ${currUsername} password: ${currPassword}`);

    if (isUserValid(currUsername, currPassword))
         login();
    else {
        currNumOfAttempts--;
        if (currNumOfAttempts<1) blockSignIn();
        else
        alert(`Wrong username or password, number off attempts left ${currNumOfAttempts}`);
    }
}

function login() {
    loggedUser=database[i];
    greetEl.textContent = Hello, ${loggedUser.username}! Nice to see you!;
}

