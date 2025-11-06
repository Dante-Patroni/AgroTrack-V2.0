// ============================================================
// 📁 Archivo: routes/contactos.js
// 🧩 Módulo: Ruteo de Contactos (API REST)
// ------------------------------------------------------------
// Este router define los endpoints para manejar las consultas
// del formulario de contacto, usando el controlador correspondiente.
//
// Rutas disponibles:
//   GET  /api/contactos  → Listar todas las consultas registradas
//   POST /api/contactos  → Registrar una nueva consulta en la BD
// ============================================================

const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoControllers');

// ============================================================
// 🔹 GET /api/contactos
// Devuelve un listado con todas las consultas almacenadas.
// ============================================================
router.get('/', contactoController.listar);

// ============================================================
// 🔹 POST /api/contactos
// Registra una nueva consulta en la base de datos.
// Valida campos obligatorios y formato de email.
// ============================================================
router.post('/', contactoController.cargar);

module.exports = router;
