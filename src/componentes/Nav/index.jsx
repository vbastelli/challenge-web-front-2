import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css'; // Caso tenha estilos adicionais

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        {/* First Logo */}
        <Link className="navbar-brand" to="/">
          <img src="formulaelogo.png" alt="Logo" className="formula-logo" />
        </Link>
        
        {/* Second Logo */}
        <Link className="navbar-brand" to="/">
          <img src="mahindralogo.png" alt="Second Logo" className="mahindra-logo" />
        </Link>

        {/* Botão Hamburguer */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens do Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/news">Notícias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tabela">Tabela de Classificação</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/eventos">Eventos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dados">Dados</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pilotos">Pilotos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">Perfil</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
