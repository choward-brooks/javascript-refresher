// console.log('Hello world!');
const message='How are you today?';
// console.log(message);
let greeting='Hello';
let fname='Sue';
// console.log(greeting, fname, '!')
let age= 13;
// console.log('you are', age);
// console.log('in 10 years ill be', + (age+10))

// Part 2:

// if (fname == 'Bob') {
// console.log('I knew it was you, ' + fname)
// } else (
// console.log('Hey ' + fname + ', you\'re not Bob.')
// )
// let iAmWearingABelt = false
// let iAmWearingGlasses = false

// if (iAmWearingABelt && iAmWearingGlasses == true) {
// console.log('Probably not Mr. Gorton');
// } else if (iAmWearingABelt && !iAmWearingGlasses) {
//     console.log('Probably is Mr. Gorton');
// } else {
//     console.log('Probably just some dude');
// }

// Part 3:

tellMeMyAge();

for (let i = 0; i<6; i++) {
    console.log('Comp Sci is Awsome')
}
for (let i = 0; i<11; i++) {
    console.log(i);
}
function tellMeMyAge() {
  console.log("You are " , age , " years old."); 
}

makePizza("cheese" , "large");
makePizza("magarita" , "small");

function makePizza(type , size) {
    console.log("One" , size , type , "pizza coming up!");
}
let pizzaPrice= 0;

function pricePizza() {
    if (size == "large") {
        pizzaPrice= 17
    } else if (size == "small") {
        pizzaPrice= 13
    }
}

let howMuchForAPizza = pricePizza
console.log(howMuchForAPizza);

let y=21
console.log(x);
console.log(y);
function checkLocal() {
    let x=67
    console.log(x);
    console.log(y);
}

