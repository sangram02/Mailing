const { json } = require("express");
const nodemailer = require("nodemailer");
const sendmail = async(req,res) =>{
    let testAccount = await nodemailer.createTestAccount();

    // connceting with smtp 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kyler.lakin60@ethereal.email',
            pass: 'yq5MJzUtQ6ZxAsP6XX'
        }
    });

    let info = await transporter.sendMail({
        from: '"sangram Ur God 👻" <kyler.lakin60@ethereal.email>', // sender address
        to: "sammyfileshare@gmail.com", // list of receivers
        subject: "Testing something", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b> <br> <h1>hello sangram!!!</h1>", // html body
      });
      console.log("Message sent: %s", info.messageId)
      res.json(info)
}
module.exports = sendmail;