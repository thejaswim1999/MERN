// // index.js
// import { sum } from "./math.js";

// console.log(sum(2, 3));
// import figlet from 'figlet';

// const result = sum(2, 3);

// figlet('Sum Result', (err, data) => {
//   if (err) {
//     console.log('Something went wrong...');
//     console.dir(err);
//     return;
//   }
//   console.log(data);
//   console.log(`The sum is: ${result}`);
// });
import fs from"fs";
// // data="This is Thejas";
// fs.writeFile("./New.txt","This is Asyncscronous ", (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }

// })
// Sync
// fs.writeFileSync("./New.txt","This is Thejas")

// CRUD-Create read update delete
// let ocn=fs.readFileSync("./New.text","UTF-8");
// fs.writeFileSync("./New.txt",ocn+"This is written");
// Read the content of "New.text"
let ocn = fs.readFileSync("./New.txt", "utf-8");

// Append text to the content
ocn += " This is written";

// Write the modified content to "New.txt"
fs.writeFileSync("./New.txt", ocn);
