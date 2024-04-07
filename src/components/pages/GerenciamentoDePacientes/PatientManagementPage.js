import React from 'react';
import './PatientManagementPage.css'; // Seu CSS para esta página
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const PatientManagementPage = () => {
  return (
    <div className="patient-management-page">
    <Header userName="Nome do Usuário" />
    <Footer />
    </div>
  );
};

export default PatientManagementPage;
