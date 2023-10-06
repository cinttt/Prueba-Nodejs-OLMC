# Prueba Técnica Node

## Cómo Iniciar el Proyecto

Siga estos pasos para iniciar el proyecto en su entorno local:

1. Ejecute el siguiente comando para instalar todas las bibliotecas y dependencias necesarias:

   ```
   npm install
   ```

2. Crear un archivo `.env` donde guardar las variables de entorno. A modo ejemplo, en el proyecto en local estas han sido las variables:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=root
   DB_NAME=sensitive
   SECRET=secret
   PORT=3000

   ```
3. Crear Base de Datos y tabla en MySQL. Los scripts se encuentran en `config/database.sql`

4. Ejecutar en consola `npm start`

5. Para que nodemailer envíe emails al destinatario, es necesario acreditar un email con verificación en dos pasos y generar una contraseña de aplicaciones.
   Para ello ingresar en este enlace:
   ```
   https://myaccount.google.com/apppasswords?utm_source=google-account&utm_medium=myaccountsecurity&utm_campaign=tsv-settings&rapt=AEjHL4OszLuqIaNuF-QzpjmLAfy1xuWAi7EXoDl47twZj3rzWUZm4O1Zyeswf3BLzwM-vSk-w-dpInPFY7VgtZ68oiw9kWw8WA

5.1 Cuando se haya generado la contraseña, copiarla y pegarla en el archivo de `nodemailer/nodemailer.js` en `auth`.
