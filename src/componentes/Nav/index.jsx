import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css'; // Caso tenha estilos adicionais

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isRaceDataDropdownOpen, setIsRaceDataDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const toggleRaceDataDropdown = () => {
    setIsRaceDataDropdownOpen(!isRaceDataDropdownOpen);
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
              <Link className="nav-link" to="/pilotos">Pilotos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                onClick={toggleRaceDataDropdown}
                role="button"
                aria-expanded={isRaceDataDropdownOpen}
              >
                Dados de Corrida
              </Link>
              <ul className={`dropdown-menu ${isRaceDataDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/dados">Dados Clima</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/eventos">Eventos</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                onClick={toggleAccountDropdown}
                role="button"
                aria-expanded={isAccountDropdownOpen}
              >
                Conta
              </Link>
              <ul className={`dropdown-menu ${isAccountDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/login">Login</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/perfil">Perfil</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
