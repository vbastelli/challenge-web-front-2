// AboutUs.jsx
import React from 'react';
import './estilo.css'; // Certifique-se de que este arquivo CSS esteja atualizado

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="mosaic-item item1">
        <h2>Bem-vindo ao MadevRace!</h2>
        <p>Aqui você encontrará tudo sobre a Fórmula E e muito mais. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis non dolor minima. Maiores saepe fuga odit libero fugit dolore ratione iure et ipsum accusantium, quia architecto exercitationem laudantium officiis!</p>
      </div>
      <img className="mosaic-image" src="formulaeeeee.jpg" alt="Imagem da Fórmula E" />
      <div className="mosaic-item item2">
        <h2>Nossa Missão</h2>
        <p>Conectar fãs com uma plataforma interativa e divertida.</p>
      </div>
      <img className="mosaic-image" src="race.webp" alt="Imagem de corrida" />
      <div className="mosaic-item item3">
        <h2>O que oferecemos</h2>
        <p>Estatísticas detalhadas, análises e uma comunidade engajada.</p>
      </div>
      <img className="mosaic-image" src="imagemtecnologia.jpg" alt="Imagem de tecnologia" />
      <div className="mosaic-item item4">
        <h2>Participe</h2>
        <p>Desafios, quizzes e muito mais para você se divertir!</p>
      </div>
      <img className="mosaic-image" src="fans.webp" alt="Imagem de diversão" />

    </div>
  );
};

export default AboutUs;
