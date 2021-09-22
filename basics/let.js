// Difference between variables let,const and var

// // 1.LET Cannot Redeclared (same block)
let name = "adarsh";
// let name = "kamal"; // SyntaxError: Identifier 'name' has already been declared
{
    let name = "kamal" // we can do like this because of name is inside block
    
}

// //2. LET Block-scoped concept

// // global variable
// let a = 10;

// function greet(){
//     // local variable
//     b = 10;
//     console.log(a + " " + b);
//     if(a == b) {
//         // variable block level scope
//         let c = 20;
//         console.log(a +" " +b + " " +c)
//     }
//     console.log(a +" " +b + " " +c); // ReferenceError: c is not defined 
// }
// greet();

// 3. Let var cannot be used without declaring
//4. let Doesn't Allow Hoisting
// console.log(x); // we are getting error (ReferenceError: Cannot access 'x' before initialization)
// let x;

//5. Let is block scoped
// variable a cannot be used here
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    if(a == 'hello'){
        // variable b can be used here
        let b = 'world';
        console.log(a + ' ' + b);
    }

     // variable b cannot be used here
    console.log(a + ' ' + b); // we are getting error var b can not be access outside of block
}
// variable a cannot be used here

greet();
