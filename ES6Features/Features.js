/* ES6 features-

1. javascript let keyword introduced
variable declared using let block-scoped */

let name = "sara";
{   
    // this variable scope only inside of the scope
    let name = "harry";
    console.log(name); // this will print harry
} 
// this print global variable name
console.log(name);


/* 2. const keyword for constant variables */
// it can not be changed

const a = 10; 
// a = 15; // (TypeError: Assignment to constant variable.) it will not happining


/* 3. javaScript Arrow Function */

// let x = function(x,y) {
//     return x * y;
// }
// can be written as
let x = (x,y) => x * y;

/* 4. javascript classes
// class keyword used to class similar constructor function 
*/

class person{
    constructor(name){
        this.name = name;
    }
}

const person1 = new person('ali');
console.log(person1.name); // it will print- ali

/* 5. Default Parameter Values 
    we can pass default values in the function parameters. 
*/

function sum(x,y = 5) {
    // take sum 
    // the value y is 5 ,if value not passed 
    console.log(x + y);
}

sum(5); // this will print 10 
sum(5,10);// this will print 15