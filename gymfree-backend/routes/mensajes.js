const express = require('express');
const router = express.Router();
const Mensaje = require('../models/mensaje');

// POST: guardar mensaje
router.post('/', async (req, res) => {
  try {
    const nuevo = new Mensaje(req.body);
    await nuevo.save();
    res.status(201).json({ mensaje: 'Mensaje guardado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar' });
  }
});

// GET: listar mensajes
router.get('/', async (req, res) => {
  try {
    const mensajes = await Mensaje.find().sort({ fecha: -1 });
    res.json(mensajes);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar' });
  }
});

// Eliminar mensaje por ID
router.delete('/:id', async (req, res) => {
  try {
    await Mensaje.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Mensaje eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
});



module.exports = router;