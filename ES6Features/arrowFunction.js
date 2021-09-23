// JavaScript Arrow Function
//syntax
let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}

// arrow function with no argument  
// let greet = () => console.log('Hello');
// greet(); // print Hello

//arrow function with one args
let greet = x => console.log(x);
greet('Hello');

// Arrow function as an expression
let age = 8;
let welcome = (age < 18) ? () => console.log('Baby'): () => console.log('Adult');
welcome();

// multiline arrow function
let sum = (a,b) => {
    let result = a + b; 
    return result;
}

let resultSum = sum(5,8);
console.log(resultSum);

