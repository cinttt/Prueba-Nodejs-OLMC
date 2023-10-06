const connection = require("../config/mysql");
const transporter = require("../nodemailer/nodemailer");

class ContactController {
  viewContact = (req, res) => {
    res.render("contact", { message: " " });
  };

  formContact = (req, res) => {
    let { name, email_address, subject, message } = req.body;
    // Rellenamos los campos de la tabla de contacto en la base de datos
    let sql = `INSERT INTO contact VALUES ('${name}', '${email_address}', '${subject}', '${message}')`;

    async function sendConfirmation() {
      // Esta función genera un email para que se mande a la persona que rellena el formulario
      const mailBody = await transporter.sendMail({
        from: "sensitive@gmail.com", // Aqui iria el email de sensitive
        to: `${email_address}`, //Email de la persona que manda el formulario
        subject: "Formulario de contacto recibido", // El asunto

        html: `<h1>Hola ${name}</h1>
          <br>
          <h2>Gracias por contactarnos</h2>
          <br>
          <p>Pronto nos pondremos en contacto con usted</p>
          `,
      });
    }

    //Hacemos la conexión con la base de datos y le pasamos la información recogida en el formulario
    connection.query(sql, (error, result) => {
      //si da error, respuesta con detalles del fallo
      error ? res.status(400).json({ error }) : sendConfirmation(),
        res.render("contact", {
          message: "Formulario enviado correctamente ", //Una vez enviado el formulario vuelve a cargar la página mostrando un mensaje
        });
    });
  };
}
module.exports = new ContactController();
