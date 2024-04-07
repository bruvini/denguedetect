const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente'); // Ajuste o caminho conforme necessário

// Rota para buscar todos os pacientes
router.get('/', async (req, res) => {
    console.log('Buscando pacientes...');
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
