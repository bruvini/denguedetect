import React, { useState, useEffect } from 'react';
import './PatientManagementPage.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Button from '../../common/Button';
import InputField from '../../common/InputField';
import PatientCard from '../../common/PatientCard';

const PatientManagementPage = () => {

    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
      const fetchPacientes = async () => {
        const res = await fetch('/api/pacientes');
        const data = await res.json();
        setPacientes(data);
      };
  
      fetchPacientes();
    }, []);
    
  return (
    <div className="patient-management-page">
      <Header userName="Nome do Usuário" />
      <div className="action-section">
        <div className="buttons-container">
          <Button text="Importar dados" onClick={() => {}} />
          <Button text="Exportar dados" onClick={() => {}} />
        </div>
        <div className="filters-row">
            <InputField placeholder="Início do Monitoramento" type="date" name="inicioMonitoramento" />
            <InputField placeholder="Paciente" type="text" name="paciente" />
            <InputField placeholder="Carteirinha" type="text" name="carteirinha" />
            <InputField placeholder="Telefone" type="text" name="telefone" />
            <InputField placeholder="Responsável" type="text" name="responsavel" />
            {/* Adicione mais filtros conforme necessário */}
        </div>

        {pacientes.map((paciente) => (
        <PatientCard key={paciente._id} patient={paciente} />
      ))}

      </div>
      <Footer />
    </div>
  );
};

export default PatientManagementPage;
