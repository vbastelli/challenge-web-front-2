import React, { useEffect, useState } from 'react';
import './estilo.css';

const Pilotos = () => {
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [nationalityFilter, setNationalityFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);

  const pilotos = [
    { nome: "Pascal Wehrlein", pontos: 198, nationality: "Germany", team: "Porsche", birthdate: "1995-10-18", number: 94, instagram: "https://www.instagram.com/pascal_wehrlein" },
    { nome: "Mitch Evans", pontos: 192, nationality: "New Zealand", team: "Jaguar", birthdate: "1994-06-26", number: 20, instagram: "https://www.instagram.com/mitchjevans_" },
    { nome: "Nick Cassidy", pontos: 176, nationality: "New Zealand", team: "Envision", birthdate: "1994-04-13", number: 37, instagram: "https://www.instagram.com/nickcassidy_" },
    { nome: "Oliver Rowland", pontos: 156, nationality: "United Kingdom", team: "Mahindra", birthdate: "1993-07-10", number: 22, instagram: "https://www.instagram.com/oliverrowlandracing" },
    { nome: "Jean-Éric Vergne", pontos: 139, nationality: "France", team: "DS Penske", birthdate: "1985-04-25", number: 25, instagram: "https://www.instagram.com/jeanericvergne" },
    { nome: "António Félix Da Costa", pontos: 134, nationality: "Portugal", team: "DS Penske", birthdate: "1991-10-31", number: 13, instagram: "https://www.instagram.com/afelixdacosta" },
    { nome: "Jake Dennis", pontos: 122, nationality: "United Kingdom", team: "Avalanche Andretti", birthdate: "1995-06-07", number: 27, instagram: "https://www.instagram.com/jakedennis19" },
    { nome: "Maximilian Günther", pontos: 73, nationality: "Germany", team: "Avalanche Andretti", birthdate: "1997-07-10", number: 28, instagram: "https://www.instagram.com/maximilianguenther/" },
    { nome: "Robin Frijns", pontos: 66, nationality: "Netherlands", team: "Envision", birthdate: "1991-08-07", number: 4, instagram: "https://www.instagram.com/robinfrijns1/" },
    { nome: "Stoffel Vandoorne", pontos: 61, nationality: "Belgium", team: "Mercedes", birthdate: "1992-03-26", number: 5, instagram: "https://www.instagram.com/svandoorne/" },
    { nome: "Sébastien Buemi", pontos: 53, nationality: "Switzerland", team: "Nissan", birthdate: "1989-10-31", number: 23, instagram: "https://www.instagram.com/sebastien_buemi" },
    { nome: "Nico Müller", pontos: 52, nationality: "Switzerland", team: "Abt", birthdate: "1992-02-25", number: 51, instagram: "https://www.instagram.com/nico_mueller51" },
    { nome: "Sam Bird", pontos: 48, nationality: "United Kingdom", team: "Jaguar", birthdate: "1987-01-09", number: 10, instagram: "https://www.instagram.com/sambirdracing" },
    { nome: "Jake Hughes", pontos: 48, nationality: "United Kingdom", team: "McLaren", birthdate: "1994-08-18", number: 12, instagram: "https://www.instagram.com/jakehughesrace/" },
    { nome: "Norman Nato", pontos: 47, nationality: "France", team: "Nissan", birthdate: "1993-07-05", number: 1, instagram: "https://www.instagram.com/n_normannato" },
    { nome: "Edoardo Mortara", pontos: 29, nationality: "Italy", team: "Maserati", birthdate: "1987-01-12", number: 48, instagram: "https://www.instagram.com/edomortara" },
    { nome: "Sacha Fenestraz", pontos: 26, nationality: "France", team: "Nissan", birthdate: "1999-11-15", number: 19, instagram: "https://www.instagram.com/sachafenestraz/" },
    { nome: "Nyck De Vries", pontos: 18, nationality: "Netherlands", team: "Mercedes", birthdate: "1995-02-06", number: 17, instagram: "https://www.instagram.com/nyckdevries/" },
    { nome: "Dan Ticktum", pontos: 12, nationality: "United Kingdom", team: "NIO", birthdate: "1999-03-08", number: 3, instagram: "https://www.instagram.com/danticktum/" },
    { nome: "Sérgio Sette Câmara", pontos: 11, nationality: "Brazil", team: "NIO", birthdate: "1998-07-20", number: 7, instagram: "https://www.instagram.com/sergiosettecamara/" },
    { nome: "Jehan Daruvala", pontos: 8, nationality: "India", team: "Mahindra", birthdate: "1998-10-01", number: 28, instagram: "https://www.instagram.com/jehandaruvala" },
    { nome: "Taylor Barnard", pontos: 5, nationality: "United Kingdom", team: "NIO", birthdate: "2003-03-07", number: 6, instagram: "https://www.instagram.com/taylorbarnard/" },
    { nome: "Lucas Di Grassi", pontos: 4, nationality: "Brazil", team: "Mahindra", birthdate: "1984-08-11", number: 11, instagram: "https://www.instagram.com/lucasdigrassi" },
    { nome: "Joel Eriksson", pontos: 2, nationality: "Sweden", team: "NIO", birthdate: "1999-09-19", number: 50, instagram: "https://www.instagram.com/joelerikssonracing/" },
    { nome: "Kelvin Van der Linde", pontos: 0, nationality: "South Africa", team: "NIO", birthdate: "1996-06-13", number: 0, instagram: "https://www.instagram.com/kelvinvdl/" },
    { nome: "Jordan King", pontos: 0, nationality: "United Kingdom", team: "NIO", birthdate: "1993-01-10", number: 0, instagram: "https://www.instagram.com/kingjordan7/" },
    { nome: "Paul Aron", pontos: 0, nationality: "Estonia", team: "NIO", birthdate: "2003-09-17", number: 0, instagram: "https://www.instagram.com/paularon_/" },
    { nome: "Caio Collet", pontos: 0, nationality: "Brazil", team: "NIO", birthdate: "2003-03-18", number: 0, instagram: "https://www.instagram.com/caiocollet/" },
];


  // Fetch favorites from localStorage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteDrivers')) || [];
    setFavoriteDrivers(savedFavorites);
  }, []);

  // Save favorite drivers to localStorage whenever the favoriteDrivers state changes
  useEffect(() => {
    localStorage.setItem('favoriteDrivers', JSON.stringify(favoriteDrivers));
  }, [favoriteDrivers]);

  useEffect(() => {
    setFilteredDrivers(pilotos); // Initialize with all drivers
  }, []);

  useEffect(() => {
    // Filter drivers based on nationality and team
    const filtered = pilotos.filter((driver) => 
      (nationalityFilter ? driver.nationality === nationalityFilter : true) &&
      (teamFilter ? driver.team === teamFilter : true)
    );
    
    // Show favorited drivers first
    const sortedDrivers = [
      ...filtered.filter(driver => favoriteDrivers.includes(driver.nome)),
      ...filtered.filter(driver => !favoriteDrivers.includes(driver.nome))
    ];
    
    setFilteredDrivers(sortedDrivers);
  }, [nationalityFilter, teamFilter, favoriteDrivers]);

  const handleNationalityChange = (e) => {
    setNationalityFilter(e.target.value);
  };

  const handleTeamChange = (e) => {
    setTeamFilter(e.target.value);
  };

  const handleVote = (driverName) => {
    alert(`Você votou em ${driverName}!`);
  };

  const toggleFavorite = (driverName) => {
    if (favoriteDrivers.includes(driverName)) {
      setFavoriteDrivers(favoriteDrivers.filter(name => name !== driverName));
    } else {
      setFavoriteDrivers([...favoriteDrivers, driverName]);
    }
  };

  const totalPoints = pilotos.reduce((acc, piloto) => acc + piloto.pontos, 0);
  const uniqueTeams = [...new Set(pilotos.map(driver => driver.team))];

  return (
    <div className="pilotos-container">
      <h2 className='pilotos-titulo'>Vote em quem você acha que vai ganhar a próxima corrida:</h2>
      <div className="pilotos-filtros">
        <select onChange={handleNationalityChange} value={nationalityFilter}>
          <option value="">All Countries</option>
          <option value="Belgium">Belgium</option>
          <option value="Brazil">Brazil</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Netherlands">Netherlands</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="India">India</option>
          <option value="Italy">Italy</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Portugal">Portugal</option>
          <option value="South Africa">South Africa</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
        </select>

        <select onChange={handleTeamChange} value={teamFilter}>
          <option value="">All Teams</option>
          {uniqueTeams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select>
      </div>

      <div className="pilotos-lista">
        {filteredDrivers.length > 0 ? (
          filteredDrivers.map((driver, index) => {
            const probability = totalPoints > 0 ? ((driver.pontos / totalPoints) * 100).toFixed(2) : 0;
            const isFavorited = favoriteDrivers.includes(driver.nome);
            return (
              <PilotoCard 
                key={index} 
                driver={driver} 
                onVote={handleVote} 
                onFavorite={toggleFavorite} 
                probability={probability} 
                isFavorited={isFavorited}
              />
            );
          })
        ) : (
          <p>Nenhum piloto disponível</p>
        )}
      </div>
    </div>
  );
};

const PilotoCard = ({ driver, onVote, onFavorite, probability, isFavorited }) => {
  const birthDate = new Date(driver.birthdate);
  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <div className={`piloto-card ${isFavorited ? 'favorito' : ''}`}>
      <h3>{driver.nome}</h3>
      <p>Nacionalidade: {driver.nationality}</p>
      <p>Equipe: {driver.team}</p>
      <p>Data de Nascimento: {driver.birthdate} (Idade: {age})</p>
      <p>Número: {driver.number}</p>
      <p>Pontos: {driver.pontos}</p>
      <p>Probabilidade de Vencer: {probability}%</p>
      <div className="piloto-vote-container">
        <button className="piloto-vote-button" onClick={() => onVote(driver.nome)}>Votar</button>
        <button className="piloto-favorite-button" onClick={() => onFavorite(driver.nome)}>
          {isFavorited ? 'Desfavoritar' : 'Favoritar'}
        </button>
        {driver.instagram && (
          <button 
            className="piloto-instagram-button" 
            onClick={() => window.open(driver.instagram, "_blank")}
          >
            {/* Instagram icon can go here */}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pilotos;