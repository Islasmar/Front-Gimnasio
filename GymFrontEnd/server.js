import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 5000;

// Habilitar CORS para permitir que Vue.js acceda a la API
app.use(cors());
app.use(express.json()); // Para poder manejar las solicitudes POST en formato JSON

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Tu usuario de MySQL
  password: '1234',       // Tu contraseña de MySQL
  database: 'gimnasioo_8b_idgs_220875',
  port: 3306
});

// Verificar si la conexión es exitosa
db.connect((err) => {
  if (err) {
    console.log('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta para obtener todos los equipos
app.get('/equipos', (req, res) => {
  const query = 'SELECT area, nombre, marca, modelo, fotografia, estatus, total_existencias, fecha_registro FROM tbb_equipamientos';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener equipos:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json(results);
    }
  });
});

// Ruta para editar un equipo
app.put('/equipos/:id', (req, res) => {
  const { id } = req.params;
  const { area, nombre, marca, modelo, fotografia, estatus, total_existencias } = req.body;
  const query = `
    UPDATE tbb_equipamientos
    SET area = ?, nombre = ?, marca = ?, modelo = ?, fotografia = ?, estatus = ?, total_existencias = ?, fecha_actualizacion = NOW()
    WHERE id = ?`;
  db.query(query, [area, nombre, marca, modelo, fotografia, estatus, total_existencias, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar equipo:', err);
      res.status(500).send('Error al actualizar equipo');
    } else {
      res.send('Equipo actualizado');
    }
  });
});

// Ruta para eliminar un equipo
app.delete('/equipos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tbb_equipamientos WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar equipo:', err);
      res.status(500).send('Error al eliminar equipo');
    } else {
      res.send('Equipo eliminado');
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});