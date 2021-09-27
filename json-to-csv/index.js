import { readFileSync } from "fs";
import { writeFileSync } from "fs";
const person = readFileSync("person.json");
const toString = person.toString();
const data = JSON.parse(toString); 
// let arr = [data];
function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((items) => {
      return Object.values(items).toString();
    })
    .join("\n");
}

const write = JSON.stringify(convertToCSV(data))
console.log(write);
writeFileSync('person.csv',write);
