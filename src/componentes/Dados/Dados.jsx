import React from 'react';
import './estilo.css';

const Dados = () => {
  // Dados simulados
  const local = "Londres";
  const temperatura = 22; // em °C
  const umidade = 65; // em %
  const temp_pista = 45;

  return (
    <div className="dados-container">
      <h2>Dados Climáticos da Próxima Corrida</h2>
      <div className="dados-content">
        <img className='imagem' src='circuito-fe.jpg' alt='Circuito da Fórmula E' />
        <p><strong>Local:</strong> {local}</p>
        <p><strong>Temperatura da Pista:</strong> {temp_pista}°C</p>
        <p><strong>Temperatura Ambiente:</strong> {temperatura}°C</p>
        <p><strong>Umidade:</strong> {umidade}%</p>
      </div>
    </div>
  );
};

export default Dados;
