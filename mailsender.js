const express = require("express");

const app = express();
let PORT = 5000;

app.get("/", (req, res)=>{
    res.send(" i am in home page");

});

app.get("/sendmail", SendMail);

const start = async()=>{
    try{
        app.listen(PORT, ()=>{
            console.log('i am live Port ${PORT}');

        });
    } catch(error){}
};

start();