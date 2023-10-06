const mysql = require("mysql");
require("dotenv").config();

//Creamos la conexion con la base de datos
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
//Tenemos en cuenta los errores
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("conexion correcta");
});
//Exportamos la conexión
module.exports = connection;
