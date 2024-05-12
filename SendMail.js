const nodemailer = require("nodemailer"); 

const sendmail = async(req, res)=>{
    let testAccount = await nodemailer.createTestAccount();

    let tranporter = await nodemailer.createTransport({

        host: "smtp.ethereal.email",
        port: 587,
        
        auth: {
          user: "louie.aufderhar@ethereal.email", // generated ethereal user
          pass: "zmeggtj2pDyAteje9b", // generated ethereal password
        }, 


    });
    let info = await transporter.SendMail({
        from: '"Devkaran 👻" <sdevkaran012@gmail.com>', // sender address
    to: "devkaran@theassignmenthub.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body

    }); 


    res.json(info);

};
module.exports = SendMail;