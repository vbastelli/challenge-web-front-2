import React from 'react';
import './estilo.css'; // Import your CSS

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <h1 className='title'>Seja bem-vindo ao nosso site</h1>
        <p>Sua jornada começa aqui.</p>
        <a href="/sobre-nos" className="cta-button">Saiba mais</a>
      </div>
    </div>
  );
};

export default HomePage;
