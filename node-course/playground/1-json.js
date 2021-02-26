const fs = require("fs");

// // const book = {
// //     title: 'Eego is the enemy',
// //     author: 'Ryan Holiday'
// // }

// // const bookJson = JSON.stringify(book);
// // fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = 
// console.log(dataBuffer.toString());

const data = fs.readFileSync('1-json.json');

const parsedData = JSON.parse(data);
parsedData.name = 'Chris';
parsedData.age = 32;
const stringifyData = JSON.stringify(parsedData);
console.log(stringifyData);

fs.writeFileSync('1-json.json', stringifyData);


