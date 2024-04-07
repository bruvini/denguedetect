import React from 'react';
import './Header.css'; // Crie um arquivo CSS para estilizar este componente

const Header = ({ userName }) => {
  return (
    <header className="header">
      <img src="/denguedetect.png" alt="Dengue Detect Logo" className="logo"/>
      <div className="header-right">
        <span className="user-name">{userName}</span>
        <img src="/menuicon.png" alt="Menu Icon" className="menu-icon"/>
      </div>
    </header>
  );
};

export default Header;
