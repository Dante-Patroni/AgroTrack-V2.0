// ============================================================
// 📁 Archivo: middlewares/logger.js
// 🧩 Módulo: Middleware de Registro de Solicitudes (Logger)
// ------------------------------------------------------------
// Este middleware se ejecuta en cada request recibido por el
// servidor Express y muestra en consola información útil para
// depuración y monitoreo.
//
// 🔸 Funcionalidades principales:
//   - Registra método HTTP (GET, POST, etc.)
//   - Registra la URL solicitada
//   - Incluye fecha y hora local (Argentina)
//   - Llama a next() para continuar el flujo normal
// ============================================================

function logger(req, res, next) {
  const fecha = new Date().toLocaleString('es-AR');
  console.log(`📘 [${fecha}] ${req.method} ${req.url}`);
  next(); // Continúa con el siguiente middleware o ruta
}

module.exports = logger;
