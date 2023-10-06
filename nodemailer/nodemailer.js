const nodemailer = require("nodemailer");

//Objeto con credenciales para el transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "", //Aqui iria el correo de Sensitive
    pass: "", //Poner credenciales del correo usado
  },
});
//Añadimos verificación para el backend
transporter.verify().then(() => {
  console.log("ready for send emails");
});

module.exports = transporter;
