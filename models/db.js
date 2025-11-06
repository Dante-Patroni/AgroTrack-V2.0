/**
 * ============================================================
 * 📦 Archivo: db.js
 * 🧠 Descripción: Configura la conexión a la base de datos MySQL
 *                 utilizando Sequelize y variables de entorno (.env).
 * ============================================================
 */

require('dotenv').config(); 
// Carga las variables definidas en el archivo .env al entorno de ejecución.
// Esto permite mantener credenciales y configuraciones fuera del código fuente.

const { Sequelize } = require('sequelize');
// Importa el ORM Sequelize, que permite interactuar con MySQL
// mediante objetos y modelos en lugar de usar consultas SQL directas.

/**
 * 💾 Configuración de conexión Sequelize
 * Los valores de conexión (nombre de la base, usuario, etc.)
 * se obtienen dinámicamente desde el archivo .env
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos (por ej. 'agrotrack')
  process.env.DB_USER,       // Usuario de la base de datos (por ej. 'root')
  process.env.DB_PASSWORD,   // Contraseña del usuario
  {
    host: process.env.DB_HOST,     // Dirección del servidor (por ej. 'localhost')
    dialect: process.env.DB_DIALECT, // Tipo de base de datos ('mysql')
    logging: false,                // Desactiva el logeo de consultas SQL en consola
  }
);

/**
 * Exportamos la instancia de Sequelize
 * para ser utilizada en los modelos y controladores.
 */
module.exports = sequelize;
