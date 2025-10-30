const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// GET todos
router.get('/', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

// GET uno
router.get('/:id', async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  cliente ? res.json(cliente) : res.status(404).json({ error: 'No encontrado' });
});

// POST nuevo
router.post('/', async (req, res) => {
  const nuevo = new Cliente(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
});

// PUT actualizar
router.put('/:id', async (req, res) => {
  const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  actualizado ? res.json(actualizado) : res.status(404).json({ error: 'No encontrado' });
});

// DELETE eliminar
router.delete('/:id', async (req, res) => {
  const eliminado = await Cliente.findByIdAndDelete(req.params.id);
  eliminado ? res.status(204).end() : res.status(404).json({ error: 'No encontrado' });
});

module.exports = router;