import React, { useEffect, useState } from 'react';
import './estilo.css';

const Pilotos = () => {
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [nationalityFilter, setNationalityFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');

  const pilotos = [
    { nome: "Pascal Wehrlein", pontos: 198, nationality: "Germany", team: "Porsche", birthdate: "1995-10-18", number: 94 },
    { nome: "Mitch Evans", pontos: 192, nationality: "New Zealand", team: "Jaguar", birthdate: "1994-06-26", number: 20 },
    { nome: "Nick Cassidy", pontos: 176, nationality: "New Zealand", team: "Envision", birthdate: "1994-04-13", number: 37 },
    { nome: "Oliver Rowland", pontos: 156, nationality: "United Kingdom", team: "Mahindra", birthdate: "1993-07-10", number: 22 },
    { nome: "Jean-Éric Vergne", pontos: 139, nationality: "France", team: "DS Penske", birthdate: "1985-04-25", number: 25 },
    { nome: "António Félix Da Costa", pontos: 134, nationality: "Portugal", team: "DS Penske", birthdate: "1991-10-31", number: 13 },
    { nome: "Jake Dennis", pontos: 122, nationality: "United Kingdom", team: "Avalanche Andretti", birthdate: "1995-06-07", number: 27 },
    { nome: "Maximilian Günther", pontos: 73, nationality: "Germany", team: "Avalanche Andretti", birthdate: "1997-07-10", number: 28 },
    { nome: "Robin Frijns", pontos: 66, nationality: "Netherlands", team: "Envision", birthdate: "1991-08-07", number: 4 },
    { nome: "Stoffel Vandoorne", pontos: 61, nationality: "Belgium", team: "Mercedes", birthdate: "1992-03-26", number: 5 },
    { nome: "Sébastien Buemi", pontos: 53, nationality: "Switzerland", team: "Nissan", birthdate: "1989-10-31", number: 23 },
    { nome: "Nico Müller", pontos: 52, nationality: "Switzerland", team: "Abt", birthdate: "1992-02-25", number: 51 },
    { nome: "Sam Bird", pontos: 48, nationality: "United Kingdom", team: "Jaguar", birthdate: "1987-01-09", number: 10 },
    { nome: "Jake Hughes", pontos: 48, nationality: "United Kingdom", team: "McLaren", birthdate: "1994-08-18", number: 12 },
    { nome: "Norman Nato", pontos: 47, nationality: "France", team: "Nissan", birthdate: "1993-07-05", number: 1 },
    { nome: "Edoardo Mortara", pontos: 29, nationality: "Italy", team: "Maserati", birthdate: "1987-01-12", number: 48 },
    { nome: "Sacha Fenestraz", pontos: 26, nationality: "France", team: "Nissan", birthdate: "1999-11-15", number: 19 },
    { nome: "Nyck De Vries", pontos: 18, nationality: "Netherlands", team: "Mercedes", birthdate: "1995-02-06", number: 17 },
    { nome: "Dan Ticktum", pontos: 12, nationality: "United Kingdom", team: "NIO", birthdate: "1999-03-08", number: 3 },
    { nome: "Sérgio Sette Câmara", pontos: 11, nationality: "Brazil", team: "NIO", birthdate: "1998-07-20", number: 7 },
    { nome: "Jehan Daruvala", pontos: 8, nationality: "India", team: "Mahindra", birthdate: "1998-10-01", number: 28 },
    { nome: "Taylor Barnard", pontos: 5, nationality: "United Kingdom", team: "NIO", birthdate: "2003-03-07", number: 6 },
    { nome: "Lucas Di Grassi", pontos: 4, nationality: "Brazil", team: "Mahindra", birthdate: "1984-08-11", number: 11 },
    { nome: "Joel Eriksson", pontos: 2, nationality: "Sweden", team: "NIO", birthdate: "1999-09-19", number: 50 },
    { nome: "Kelvin Van der Linde", pontos: 0, nationality: "South Africa", team: "NIO", birthdate: "1996-06-13", number: 0 },
    { nome: "Jordan King", pontos: 0, nationality: "United Kingdom", team: "NIO", birthdate: "1993-01-10", number: 0 },
    { nome: "Paul Aron", pontos: 0, nationality: "Estonia", team: "NIO", birthdate: "2003-09-17", number: 0 },
    { nome: "Caio Collet", pontos: 0, nationality: "Brazil", team: "NIO", birthdate: "2003-03-18", number: 0 },
  ];

  useEffect(() => {
    setFilteredDrivers(pilotos); // Initialize with all drivers
  }, []);

  useEffect(() => {
    setFilteredDrivers(
      pilotos.filter((driver) => 
        (nationalityFilter ? driver.nationality === nationalityFilter : true) &&
        (teamFilter ? driver.team === teamFilter : true)
      )
    );
  }, [nationalityFilter, teamFilter]);

  const handleNationalityChange = (e) => {
    setNationalityFilter(e.target.value);
  };

  const handleTeamChange = (e) => {
    setTeamFilter(e.target.value);
  };

  const handleVote = (driverName) => {
    alert(`Você votou em ${driverName}!`);
  };

  // Calculate total points to compute probabilities
  const totalPoints = pilotos.reduce((acc, piloto) => acc + piloto.pontos, 0);
  
  // Get unique teams for filtering
  const uniqueTeams = [...new Set(pilotos.map(driver => driver.team))];

  return (
    <div className="carros-page">
      <h2 className='titulo'>Vote em quem você acha que vai ganhar a próxima corrida:</h2>
      <div className="filters">
        <select onChange={handleNationalityChange} value={nationalityFilter}>
          <option value="">All Nationalities</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Belgium">Belgium</option>
          <option value="Brazil">Brazil</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Portugal">Portugal</option>
          <option value="India">India</option>
        </select>

        <select onChange={handleTeamChange} value={teamFilter}>
          <option value="">All Teams</option>
          {uniqueTeams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select>
      </div>

      <div className="drivers-list">
        {filteredDrivers.length > 0 ? (
          filteredDrivers.map((driver, index) => {
            const probability = totalPoints > 0 ? ((driver.pontos / totalPoints) * 100).toFixed(2) : 0;
            return (
              <Driver 
                key={index} 
                driver={driver} 
                onVote={handleVote} 
                probability={probability} 
              />
            );
          })
        ) : (
          <p>No drivers available</p>
        )}
      </div>
    </div>
  );
};

const Driver = ({ driver, onVote, probability }) => {
  // Calculate age based on birthdate
  const birthDate = new Date(driver.birthdate);
  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <div className="driver-card">
      <h3>{driver.nome}</h3>
      <p>Nationality: {driver.nationality}</p>
      <p>Team: {driver.team}</p>
      <p>Birthdate: {driver.birthdate} (Age: {age})</p>
      <p>Driver Number: {driver.number}</p>
      <p>Points: {driver.pontos}</p>
      <p>Probability of Winning: {probability}%</p>
      <button className="vote-button" onClick={() => onVote(driver.nome)}>Votar</button>
    </div>
  );
};

export default Pilotos;
