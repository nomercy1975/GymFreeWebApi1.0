const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/api/clientes', clientesRoutes);

mongoose.connect('mongodb+srv://rubenpulido1975_db_user:nomercy1975@sena.dhckkxb.mongodb.net/gymfree?retryWrites=true&w=majority&appName=sena')
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error de conexión:', err));