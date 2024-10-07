import React from 'react';
import './estilo.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <iframe
        className="background-video"
        src="https://www.youtube.com/embed/p8_vkcCyOTs?autoplay=1&loop=1&playlist=p8_vkcCyOTs&mute=1&controls=0&rel=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Video"
      ></iframe>
      <div className="overlay">
        <h1 className='title'>Transforme sua experiência.</h1>
        <p>Explore inovações que mudam o jogo.</p>
        <a href="/sobre-nos" className="cta-button">Descubra mais</a>
      </div>
    </div>
  );
};

export default HomePage;
