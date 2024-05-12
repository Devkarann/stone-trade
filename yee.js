const fs = require("fs");

//fs.writeFileSync("read.txt","So buddy tumharein father aaye hai"); 
//fs.appendFileSync("read.txt","aapken father aaye haui");
const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);
