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



// convert json to xml 
function convertJsonToXML(obj) {
  let xml = '';
  for (let prop in obj) {
    xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
    if (obj[prop] instanceof Array) {
      for (let array in obj[prop]) {
        xml += "<" + prop + ">";
        xml += convertJsonToXML(new Object(obj[prop][array]));
        xml += "</" + prop + ">";
      }
    } else if (typeof obj[prop] == "object") {
      xml += convertJsonToXML(new Object(obj[prop]));
    } else {
      xml += obj[prop];
    }
    xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
  }
   xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
  return xml
}

//Creating new file with XML data
writeFileSync("convertedJsonToXML.xml", convertJsonToXML(data), (err) => {
  if (err) throw err;
  console.log("Data written to new file");
});
