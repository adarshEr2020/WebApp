// 1. const var immutable
//Cannot be Reassigned
// const a = 10;
// a = 20; // can not reassigned TypeError: Assignment to constant variable.
// const a = 2; // cannot be redeclared

// 2. const must be initialize when be declare
// can not do like this 
 const a; // we will get error SyntaxError: Missing initializer in const declaration
 a = 10;