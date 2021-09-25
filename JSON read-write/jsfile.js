// write JSON file 
import { writeFileSync } from 'fs';
let student = { 
    name: 'Adarsh',
    age: 24, 
    gender: 'Male',
    department: 'cs',
    car: 'Honda' 
};
 
const toJson = JSON.stringify(student);
writeFileSync('student.Json',toJson);

// read json file 
// const fs = require('fs');
import { readFileSync } from 'fs';
const doc = readFileSync('student.json');
const toString = doc.toString(); // convert to string 
const data =JSON.parse(toString); // string to object

console.log(data);