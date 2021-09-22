// 1. A variable declared with var can be redeclared again
// we can declare like this
// var x =10;
// var x = 5;
// x =4;
// console.log(x)

// //2.  Redeclaring a variable with var
// // in a different scope or block changes the value of the outer variable

// var a = 5;
// console.log(a); // 5 
// {
//     var a = 3; 
//     console.log(a); // 3
// }
// console.log(a); // redeclaring the variables with var a value will change 3 

// 3. when variale is declared in loop value of that variable changes 

// var a = 2;
// for(var a = 0; a < 3; a++) {
//     console.log('hello');
// }
// console.log(a); // 3 // here var a value is changed

// and LET can not be change
let a = 2;
for(let a = 0; a < 3; a++) {
    console.log('hello');
}
console.log(a); // 3 // here var a value is not changed

//4. var is function scoped 

// variable a cannot be used here
function greet() {
    // variable a can be used here
    var a = 'hello';
    console.log(a);
}
// variable a cannot be used here

greet();