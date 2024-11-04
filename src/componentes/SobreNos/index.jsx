import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import './estilo.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img className="mosaic-image" src="piloto-formula-e.jpg" alt="Imagem da Fórmula E" />
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
          <Link to="/pilotos" className="mosaic-item offering-item">
            <img className="offering-icon" src="statistics-icon.png" alt="Estatísticas" />
            <p>Estatísticas detalhadas sobre pilotos e equipes</p>
          </Link>
          <Link to="/dados" className="mosaic-item offering-item">
            <img className="offering-icon" src="analysis-icon.png" alt="Análises" />
            <p>Análises de corridas e desempenhos</p>
          </Link>
          <Link to="/perfil" className="mosaic-item offering-item">
            <img className="offering-icon" src="community-icon.png" alt="Comunidade" />
            <p>Uma comunidade engajada e apaixonada</p>
          </Link>
          <Link to="/news" className="mosaic-item offering-item">
            <img className="offering-icon" src="news-icon.png" alt="Notícias" />
            <p>Notícias e atualizações em tempo real</p>
          </Link>
          <Link to="/quiz" className="mosaic-item offering-item">
            <img className="offering-icon" src="quiz-icon.png" alt="Quiz" />
            <p>Quizzes interativos para testar seus conhecimentos sobre Fórmula E</p>
          </Link>
          <Link to="/eventos" className="mosaic-item offering-item">
            <img className="offering-icon" src="events-icon.png" alt="Eventos" />
            <p>Calendário de eventos e corridas ao vivo para você não perder nada</p>
          </Link>
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
