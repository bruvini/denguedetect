import React from 'react';
import './Footer.css'; // Não se esqueça de criar o CSS para estilizar o rodapé

const Footer = () => {
  const year = new Date().getFullYear(); // Pega o ano atual

  return (
    <footer className="footer">
      <p>Todos os direitos reservados © Enf. Bruno Vinícius - {year}</p>
    </footer>
  );
};

export default Footer;
