const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  "Nome do Paciente": { type: String, required: true },
  "Telefone": { type: String, required: true },
  "Carteirinha": Number,
  "Convênio": String,
  "Entrada no PA": Date,
  "Inicio do Monitoramento": Date,
  "Ultimo Contato": Date,
  "Responsável": String,
  "Contato com Sucesso": Number,
  "Contato sem Sucesso": Number,
  "História de Contatos": String,
  "Hemograma": String,
  "Ultima Febre": Date,
  "Encaminhado ao PA": String,
  "Motivo para PA": String,
  "Data da Alta": Date,
  "Motivo da Alta": String,
  "Tempo de Monitoramento": Number // calculado, não precisa ser armazenado
});

module.exports = mongoose.model('Paciente', pacienteSchema, 'Pacientes');

