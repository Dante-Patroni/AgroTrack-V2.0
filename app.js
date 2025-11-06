// ============================================================
// 📁 Archivo: app.js
// 🚀 Punto de Entrada Principal - Proyecto AgroTrack V2
// ------------------------------------------------------------
// Configura y levanta el servidor Express, inicializa middlewares,
// gestiona las rutas de la API y realiza la conexión a MySQL
// mediante Sequelize. Incluye manejo centralizado de errores
// y logging de solicitudes.
// ============================================================

// 🔧 Carga variables de entorno (.env)
require('dotenv').config();

const express = require('express');
const path = require('path');
const sequelize = require('./models/db'); // ORM Sequelize
const logger = require('./middlewares/logger'); // Middleware de logging
const errorHandler = require('./middlewares/errorHandler'); // Middleware global de errores
const contactosRouter = require('./routes/contactos'); // Rutas API de contacto

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// 🔹 MIDDLEWARES GLOBALES
// ============================================================

// 📘 Logger → registra método, ruta y hora
app.use(logger);

// 🧩 Middleware de parsing para JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================
// 🔹 RUTAS PRINCIPALES
// ============================================================

// 🌐 Endpoints API
app.use('/api/contactos', contactosRouter);

// 📂 Archivos estáticos (HTML, CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// 🏠 Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🩺 Endpoint de verificación del estado del servidor
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Servidor funcionando correctamente 🚀',
    time: new Date().toLocaleString('es-AR'),
  });
});

// ============================================================
// 🔹 MANEJO CENTRALIZADO DE ERRORES
// ============================================================
app.use(errorHandler);

// ============================================================
// 🔹 CONEXIÓN A LA BASE DE DATOS Y LEVANTAMIENTO DEL SERVIDOR
// ============================================================
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado correctamente a la base de datos MySQL (usando Sequelize)');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar con la base de datos:', err);
  });
