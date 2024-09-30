import React from 'react';
import './estilo.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="mosaic-item item1">
        <h2>Bem-vindo ao MadevRace!</h2>
        <p>
          No MadevRace, você encontrará tudo sobre a Fórmula E e muito mais! 
          Estamos aqui para conectar você com informações atualizadas, análises detalhadas e uma comunidade apaixonada. 
          Venha explorar o mundo da Fórmula E conosco!
        </p>
      </div>
      <img className="mosaic-image" src="formulaeeeee.jpg" alt="Imagem da Fórmula E" />
      
      <div className="mosaic-item item2">
        <h2>Nossa Missão</h2>
        <p>
          Conectar fãs e entusiastas da Fórmula E por meio de uma plataforma interativa e divertida. 
          Queremos ser o seu ponto de referência para todas as novidades e eventos do mundo das corridas elétricas.
        </p>
      </div>
      <img className="mosaic-image" src="race.webp" alt="Imagem de corrida" />
      
      <div className="mosaic-item item3">
        <h2>O que oferecemos</h2>
        <div className="offerings-list">
          <div className="mosaic-item offering-item">
            <img className="offering-icon" src="statistics-icon.png" alt="Estatísticas" />
            <p>Estatísticas detalhadas sobre pilotos e equipes</p>
          </div>
          <div className="mosaic-item offering-item">
            <img className="offering-icon" src="analysis-icon.png" alt="Análises" />
            <p>Análises de corridas e desempenhos</p>
          </div>
          <div className="mosaic-item offering-item">
            <img className="offering-icon" src="community-icon.png" alt="Comunidade" />
            <p>Uma comunidade engajada e apaixonada</p>
          </div>
          <div className="mosaic-item offering-item">
            <img className="offering-icon" src="news-icon.png" alt="Notícias" />
            <p>Notícias e atualizações em tempo real</p>
          </div>
          <div className="mosaic-item offering-item">
            <img className="offering-icon" src="quiz-icon.png" alt="Quiz" />
            <p>Quizzes interativos para testar seus conhecimentos sobre Fórmula E</p>
          </div>
          <div className="mosaic-item offering-item">
            <img className="offering-icon" src="events-icon.png" alt="Eventos" />
            <p>Calendário de eventos e corridas ao vivo para você não perder nada</p>
          </div>
        </div>
      </div>





      <img className="mosaic-image" src="imagemtecnologia.jpg" alt="Imagem de tecnologia" />
      
      <div className="mosaic-item item4">
        <h2>Participe!</h2>
        <p>
          Junte-se a nós em desafios emocionantes, quizzes interativos e muito mais para você se divertir! 
          Estamos sempre buscando novas formas de engajar nossos usuários e tornar sua experiência única.
        </p>
      </div>
      <img className="mosaic-image" src="fans.webp" alt="Imagem de diversão" />
    </div>
  );
};

export default AboutUs;
