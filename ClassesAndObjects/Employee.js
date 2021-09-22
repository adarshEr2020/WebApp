// declaring class
class Employee {
    // initialing an object
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    // declaring method
    details(){
        document.writeln(this.id+ " " +this.name);
    }
}
// passing object to a variable
var e1 = new Employee(101,"Justin");
var e2 = new Employee(102,"Roy");

console.log(e1);
// calling method
e1.details();
e2.details();