/**
 * ==========================================================
 * 🌾 AGROTRACK v2 - Modelo Sequelize: Consulta
 * Autor: Dante Luis Patroni
 * Materia: Programación Web II
 * Descripción:
 *   Define la estructura del modelo "Consulta", que representa
 *   las consultas enviadas desde el formulario de contacto.
 *   Este modelo se asocia directamente con la tabla "consultas"
 *   en la base de datos MySQL.
 * ==========================================================
 */

const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Importa la conexión configurada de Sequelize

/**
 * Definición del modelo "Consulta"
 * - Sequelize se encarga de mapear este modelo a la tabla SQL correspondiente.
 */
const Consulta = sequelize.define(
  'Consulta',
  {
    // ID autoincremental (clave primaria)
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    // Nombre del remitente de la consulta
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    // Correo electrónico del remitente
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    // Mensaje o contenido del contacto
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    // Fecha y hora de creación de la consulta
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Se asigna automáticamente al momento de crear el registro
    },
  },
  {
    tableName: 'consultas', // Nombre exacto de la tabla en MySQL
    timestamps: false, // Evita que Sequelize agregue createdAt / updatedAt
  }
);

// Exporta el modelo para que pueda ser usado por los controladores
module.exports = Consulta;

/* ==========================================================
   FIN DEL ARCHIVO models/Consulta.js
   ========================================================== */
