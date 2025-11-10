# 🌾 AgroTrack v2
Aplicación Node.js con Express y Sequelize para gestionar consultas del formulario de contacto.  
Actividad Obligatoria 2 – Programación Web II

---

## 👤 Información del estudiante
**Nombre:** Dante Luis Patroni  
**Legajo:** 13221640  

---

## 🚀 Instrucciones para ejecutar

```bash
# Instalar dependencias necesarias
npm install

# Ejecutar en modo producción
npm start

# O, en modo desarrollo (requiere nodemon)
npm run dev

⚙️ Requisitos previos

Node.js v18 o superior

MySQL activo (por ejemplo, con XAMPP o WAMP)

Base de datos creada ejecutando el script schema.sql

🗄️ Configuración del entorno

El proyecto usa dotenv para gestionar las variables de entorno.
Debes crear un archivo .env (no versionado) basado en .env.example:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=agrotrack
PORT=3000
```

**Nota:** El dialect MySQL está hardcodeado en el código, no es necesario incluirlo en .env.

🧠 Estructura del proyecto
agrotrackV2/
│
├── app.js                   # Servidor Express principal
│
├── sql/
│   └── schema.sql           # Script SQL de creación de la BD
│
├── .env                     # Configuración local (no versionado)
├── .env.example             # Ejemplo de configuración
│
├── models/
│   ├── db.js                # Configuración de Sequelize
│   └── Consulta.js          # Modelo Sequelize (tabla contactos)
│
├── controllers/
│   └── contactoControllers.js # Lógica de endpoints (guardar y listar)
│
├── routes/
│   └── contactos.js         # Rutas /api/contactos
│
├── middlewares/
│   ├── logger.js            # Middleware de logging
│   └── errorHandler.js      # Middleware de manejo de errores
│
├── public/
│   ├── index.html           # Página principal
│   ├── contacto.html        # Formulario de contacto
│   └── estilos.css          # Estilos
│
└── package.json


🌐 Endpoints principales
✅ 1. Verificación del servidor

GET /health
📋 Devuelve el estado actual del servidor.

Respuesta:
{
  "status": "ok"
}

💬 2. Registrar nueva consulta

POST /api/contactos

Body (JSON o x-www-form-urlencoded):
{
  "nombre": "Juan Pérez",
  "email": "juan@mail.com",
  "mensaje": "Quisiera información sobre los servicios."
}
Respuesta exitosa (201):
{
  "message": "✅ Consulta registrada correctamente.",
  "data": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@mail.com",
    "mensaje": "Quisiera información sobre los servicios.",
    "fecha": "2025-11-06T15:12:00.000Z"
  }
}
Error 400 – campos incompletos o email inválido:
{
  "error": "Todos los campos son obligatorios."
}
📋 3. Listar todas las consultas

GET /api/contactos

Respuesta (200):
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@mail.com",
    "mensaje": "Quisiera información sobre los servicios.",
    "fecha": "2025-11-06T15:12:00.000Z"
  }
]
🧰 Middlewares implementados
middlewares/logger.js

Registra cada solicitud con método, ruta y fecha:
📘 [06/11/2025, 12:45:12] POST /api/contactos

middlewares/errorHandler.js

Maneja errores globales y responde con JSON:
{
  "error": "El email no tiene un formato válido."
}

Modelo Sequelize (models/Consulta.js)
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Consulta = sequelize.define('Consulta', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  mensaje: { type: DataTypes.TEXT, allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'contactos',
  timestamps: false
});

module.exports = Consulta;
🧪 Checklist de entrega

✅ npm start levanta sin errores
✅ /health responde con estado correcto
✅ POST /api/contactos guarda datos válidos
✅ POST /api/contactos inválido devuelve 400
✅ GET /api/contactos lista las consultas
✅ .env no versionado
✅ .env.example, schema.sql, README.md y Postman presentes

🧰 Pruebas con Postman

Se incluye en el repositorio el archivo:
**AgroTrack - V02.postman_collection.json**

**Importación:**
1. Abrir Postman → Import
2. Seleccionar el archivo `AgroTrack - V02.postman_collection.json`
3. Ejecutar las solicitudes GET y POST de la colección.

Esto permite verificar de forma automática todas las rutas y respuestas esperadas.


🧾 Licencia

Proyecto académico - IUA - Programación Web II
© 2025 Dante Luis Patroni