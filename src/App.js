import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/Login/LoginPage'; 
import PatientManagementPage from './components/pages/GerenciamentoDePacientes/PatientManagementPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gerenciadordepacientes" element={<PatientManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
