import React, { useEffect, useState } from 'react';
import './estilo.css';

const Tabela = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch('/tabela.json'); // Adjust path if necessary
        const data = await response.json();
        setStandings(data.standings);
      } catch (error) {
        console.error('Error fetching standings data:', error);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div className="tabela">
      <h1>2023/2024 SEASON</h1>
      <h2>Tabela Classificativa</h2>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Piloto</th>
            <th>Equipa</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((entry) => (
            <tr key={entry.pos}>
              <td>{entry.pos}</td>
              <td>{entry.driver}</td>
              <td>{entry.team}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
