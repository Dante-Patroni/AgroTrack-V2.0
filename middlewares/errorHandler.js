// ============================================================
// 📁 Archivo: middlewares/errorHandler.js
// 🧩 Módulo: Middleware Centralizado de Errores
// ------------------------------------------------------------
// Este middleware captura cualquier error que ocurra durante
// la ejecución de las rutas o controladores, evitando que el
// servidor se detenga y devolviendo una respuesta controlada.
//
// 🔸 Funcionalidades principales:
//   - Muestra el error en consola con un formato claro.
//   - Retorna al cliente un JSON con código y mensaje amigable.
//   - Distingue entre errores del usuario (400) y del servidor (500).
// ============================================================

function errorHandler(err, req, res, next) {
  console.error('🔥 Error detectado:', err.message);

  // Código HTTP del error (por defecto 500)
  const status = err.status || 500;

  // Mensaje según tipo de error
  const mensaje =
    status === 500
      ? '⚠️ Error interno del servidor. Por favor, intenta más tarde.'
      : err.message;

  // Enviar respuesta JSON al cliente
  res.status(status).json({
    error: mensaje,
    code: status,
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString()
  });
}

module.exports = errorHandler;
