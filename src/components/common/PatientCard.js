import React from 'react';
import './PatientCard.css'; // Garanta que esteja importando o CSS

const PatientCard = ({ patient }) => {
  // Calcula o tempo de monitoramento
  const calcularTempoMonitoramento = (dataInicio) => {
    const dataInicioFormatada = new Date(dataInicio);
    const dataAtual = new Date();
    const diferencaTempo = dataAtual.getTime() - dataInicioFormatada.getTime();
    const diferencaDias = Math.floor(diferencaTempo / (1000 * 3600 * 24));
    return `${diferencaDias} dias`;
  };

  // Exemplo de função que será chamada quando um ícone for clicado
  const handleIconClick = (action) => {
    console.log(`${action} foi clicado para o paciente ${patient.nomeDoPaciente}`);
    // Aqui você pode adicionar a lógica específica para cada ação
  };

  return (
    <div className="patient-card">
      <h3 style={{ color: 'white' }}>{patient.nomeDoPaciente}</h3>
      <p style={{ color: 'white' }}>Hemograma: {patient.hemograma}</p>
      <p style={{ color: 'white' }}>Responsável: {patient.responsavel}</p>
      <p style={{ color: 'white' }}>Tempo de Monitoramento: {calcularTempoMonitoramento(patient.inicioDoMonitoramento)}</p>
      
      <div className="action-icons">
        <img src="/iconeVer.png" alt="Visualizar" onClick={() => handleIconClick('Visualizar')} />
        <img src="/iconeResponsavel.png" alt="Definir Responsável" onClick={() => handleIconClick('Definir Responsável')} />
        <img src="/iconePA.png" alt="Mandar para PA" onClick={() => handleIconClick('Mandar para PA')} />
        <img src="/iconeAlta.png" alt="Dar Alta" onClick={() => handleIconClick('Dar Alta')} />
        <img src="/iconeSemResposta.png" alt="Sem Resposta" onClick={() => handleIconClick('Sem Resposta')} />
      </div>
    </div>
  );
};

export default PatientCard;
