const http = require("http");
const fs = require("fs");

// reading our whole Html file.

const weatFile = fs.readFileSync("weat.html", "utf-8"); 

// yha html vali values replace ho rhi hai. do arguments pass kr rkhe hai jisme tempval temporary hai and orgval jo api ki through aa rhji bhai vo.

const replaceval = (tempval , orgval)=>{
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min );
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max );
    temperature = temperature.replace("{%location%}", orgval.name );
    temperature = temperature.replace("{%country%}", orgval.sys.country );

};

// ye Api se copy kiya hai 

const server =http.createServer((req,res)=>{
    if(req == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={87b5313aaa485711df3ddf1eb52e3005}",{streaming})
        .on('data', function(chunk){

            //chunk data ko JSON mein convert kiya or phir uss converted data ko array mein convert kiya. 
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            
            //yha uski value nikal di map method ke through.

            const realTime = arrData.map((val) => {

                // yha jo main hai vo API ke andr jo array bana hai uska object hai main or uske andr humein temp, min ,max vgera mil jayenge isliye val.main kiya

                replaceval(weatFile, val).join(" "); 
                res.write(realTime);

            });
        })
        .on('end', function(err){
            if(err) return console.log('connection closed due to errors', err);
            console.log('end');
            res.end();
        });
    }

}); 

// listening owr own server that is localhost:8000 

server.listen(8000,"127.0.0.1");
