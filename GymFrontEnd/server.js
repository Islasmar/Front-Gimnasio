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
  password: '1234',   // Tu contraseña de MySQL
  database: 'gym',
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

app.post("/login", (req, res) => {
  const { correo_electronico, contrasena } = req.body;
  const sql = "SELECT * FROM tbb_usuarios WHERE correo_electronico = ? AND contrasena = ?";

  db.query(sql, [correo_electronico, contrasena], (err, results) => {
    if (err) {
      console.error("Error al buscar usuario:", err);
      return res.status(500).json({ error: "Error del servidor" });
    }

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// Ruta para obtener todos los equipos (ya existente)
app.get('/equipos', (req, res) => {
  const query = 'SELECT nombre, marca, modelo, fotografia, estatus, total_existencias, fecha_registro FROM tbb_equipamientos';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener equipos:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json(results);
    }
  });
});


// Ruta para editar un equipo (ya existente)
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

// Ruta para eliminar un equipo (ya existente)
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

// Nueva ruta para obtener todas las sucursales
app.get('/sucursales', (req, res) => {
    const query = `SELECT 
        nombre, direccion, responsable_id, total_clientes_atendidos, promedio_clientes_x_dia, 
        capacidad_maxima, total_empleados, horario_disponibilidad, estatus, fecha_registro
      FROM tbc_sucursales`;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ error: 'Error en el servidor' });
            return;
        }
        res.json(results);
    });
  });

  // Ruta para obtener todos los mantenimientos
app.get('/mantenimiento', (req, res) => {
    const query = 'SELECT descripcion, responsable, costo, estatus, fecha_mantenimiento FROM tbb_mantenimiento';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener mantenimientos:', err);
        res.status(500).send('Error en el servidor');
      } else {
        res.json(results);
      }
    });
  });

  app.get('/instalaciones', (req, res) => {
    const query = `SELECT Sucursal_Id, Descripcion, Tipo, Observaciones, Estatus, Fecha_Registro FROM tbb_instalaciones`;
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener las instalaciones:', err);
        res.status(500).send('Error en el servidor');
      } else {
        res.json(results);
      }
    });
  });

  // Obtener todos los productos (sin `id` ni `fecha_actualizacion`)
app.get("/productos", (req, res) => {
  const sql = `SELECT nombre, marca, cod_barras, descripcion, precio_actual, fotografia, estatus, fecha_registro 
               FROM tbb_productos`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener productos:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }
    res.json(results);
  });
});

// Obtener todos los usuarios (sin fecha_actualizacion)
app.get("/usuarios", (req, res) => {
  const sql = `SELECT id, nombre_usuario, correo_electronico, contrasena, numero_telefonico_movil, estatus, fecha_registro 
               FROM tbb_usuarios`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});