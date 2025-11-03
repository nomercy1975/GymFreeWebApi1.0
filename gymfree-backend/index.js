// gymfree-backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Rutas
const clientesRoutes = require('./routes/clientes');// Importa las rutas de clientes

const app = express();// Crear la aplicación Express
const PORT = 4000;  // Puerto donde correrá el servidor

// Middlewares

app.use(cors());
app.use(express.json());
app.use('/api/clientes', clientesRoutes);// Usar las rutas de clientes
app.use('/api/mensajes', require('./routes/mensajes'));// Usar las rutas de mensajes














// Conexión a MongoDB Atlas

mongoose.connect('mongodb+srv://rubenpulido1975_db_user:nomercy1975@sena.dhckkxb.mongodb.net/gymfree?retryWrites=true&w=majority&appName=sena')
  .then(() => {
    console.log('Conectado a MongoDB Atlas');// Conexión exitosa
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);    // Iniciar el servidor
    });
  })
  .catch(err => console.error('Error de conexión:', err));// Manejo de errores de conexión
