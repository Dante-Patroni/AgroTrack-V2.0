/**
 * CONTROLLER DE CONTACTO - Maneja formulario de contacto y persistencia
 * Ahora usa Sequelize para guardar y listar los registros en MySQL
 * Implementa las rutas:
 *   POST /api/contactos → guardar consulta
 *   GET /api/contactos  → listar consultas
 */

const Consulta = require('../models/Consulta'); // Modelo Sequelize

/**
 * POST /api/contactos - Guarda una nueva consulta
 */
async function cargar(req, res, next) {
  try {
    const { nombre, email, mensaje } = req.body;

    // =========================================================
    // VALIDACIÓN DE CAMPOS OBLIGATORIOS
    // =========================================================
    if (!nombre || !email || !mensaje) {
      const error = new Error('Todos los campos son obligatorios.');
      error.status = 400;
      throw error;
    }

    // =========================================================
    // VALIDACIÓN DE FORMATO DE EMAIL
    // =========================================================
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const error = new Error('El email no tiene un formato válido.');
      error.status = 400;
      throw error;
    }

    // =========================================================
    // INSERCIÓN EN BASE DE DATOS CON SEQUELIZE
    // =========================================================
    const nuevaConsulta = await Consulta.create({ nombre, email, mensaje });

    res.status(201).json({
      message: '✅ Consulta registrada correctamente.',
      data: nuevaConsulta,
    });

  } catch (error) {
    next(error); // Pasa el error al middleware centralizado
  }
}


/**
 * GET /api/contactos - Lista todas las consultas almacenadas
 */
async function listar(req, res) {
  try {
    const consultas = await Consulta.findAll({
      order: [['fecha', 'DESC']], // Ordena por fecha descendente
    });

    if (consultas.length === 0) {
      return res.status(200).json({ message: '📭 No hay consultas registradas aún.' });
    }

    res.status(200).json(consultas);

  } catch (error) {
    console.error('Error al leer consultas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { cargar, listar };
