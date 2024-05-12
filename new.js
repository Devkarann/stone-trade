const fs = require("fs");

const objData = {
    name : "devkaran",
    RollNo : "19BCON484",
    Section : "C",
};

const jsonData = JSON.stringify(objData);
console.log(jsonData);

//fs.writeFile('jsonccclass.json',jsonData,(err)=>{
//   console.log("Done");
//});
fs.readFile("jsonccclass.json", "utf-8",(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(orgData);
}); 
