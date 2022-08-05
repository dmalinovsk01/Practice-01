"use strcit";

if (4 == 4) {
    console.log('ok!');
} else{
    console.log("error");
}

// const num = 50;

// if (num < 49){
//     console.log("error");
// } else if (num > 100){
//     console.log("too much");
// } else {
//     console.log("ok");
// }

// ternarniy operator 

//(num === 50) ? console.log('ok') : console.log('error');

//+'4';

const num = 50;
switch (num) {
    case 49:
        console.log('false1');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('not today');
        break;
}