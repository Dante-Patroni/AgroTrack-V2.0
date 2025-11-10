-- ===================================================
-- Esquema de Base de Datos: AgroTrack
-- Autor: Dante Patroni
-- Descripción: Script de creación de la base de datos
--              y tabla de contactos del formulario.
-- ===================================================

-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS agrotrack
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

-- Seleccionar base de datos
USE agrotrack;

-- Crear tabla de contactos
CREATE TABLE contactos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
