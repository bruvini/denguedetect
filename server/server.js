const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
app.use(cors());


// Middleware
app.use(express.json()); // Para parsear JSON no corpo das requisições

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://bruvinisilva12:matadordedengue123@denguedetect.rodie3r.mongodb.net/?retryWrites=true&w=majority&appName=DengueDetect', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar com o MongoDB:', err));

// Definição de rotas (Exemplo básico)
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const pacientesRouter = require('./routes/pacientes'); // Ajuste o caminho conforme necessário
app.use('/api/pacientes', pacientesRouter);

