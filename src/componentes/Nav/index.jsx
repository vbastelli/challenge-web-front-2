import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isRaceDataDropdownOpen, setIsRaceDataDropdownOpen] = useState(false);

  const accountDropdownRef = useRef(null);
  const raceDataDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const toggleRaceDataDropdown = () => {
    setIsRaceDataDropdownOpen(!isRaceDataDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setIsAccountDropdownOpen(false);
      }
      if (raceDataDropdownRef.current && !raceDataDropdownRef.current.contains(event.target)) {
        setIsRaceDataDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brands">
          <Link className="navbar-brand" to="/">
            <img src="formulaelogo.png" alt="Logo" className="formula-logo" />
          </Link>
          <Link className="navbar-brand" to="/">
            <img src="mahindralogo.png" alt="Second Logo" className="mahindra-logo" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/news" onClick={closeMenu}>Notícias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tabela" onClick={closeMenu}>Tabela de Classificação</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pilotos" onClick={closeMenu}>Pilotos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz" onClick={closeMenu}>Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nos" onClick={closeMenu}>Sobre Nós</Link>
            </li>
            <li className="nav-item dropdown" ref={raceDataDropdownRef}>
              <span
                className="nav-link dropdown-toggle"
                onClick={toggleRaceDataDropdown}
                aria-expanded={isRaceDataDropdownOpen}
              >
                Dados de Corrida
              </span>
              <ul className={`dropdown-menu ${isRaceDataDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/dados" onClick={closeMenu}>Dados Clima</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/eventos" onClick={closeMenu}>Eventos</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown" ref={accountDropdownRef}>
              <span
                className="nav-link dropdown-toggle"
                onClick={toggleAccountDropdown}
                aria-expanded={isAccountDropdownOpen}
              >
                Conta
              </span>
              <ul className={`dropdown-menu ${isAccountDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/login" onClick={closeMenu}>Login</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/perfil" onClick={closeMenu}>Perfil</Link>
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
