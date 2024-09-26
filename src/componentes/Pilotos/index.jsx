import React, { useEffect, useState } from 'react';
import './estilo.css';

const Pilotos = () => {
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [nationalityFilter, setNationalityFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');

  useEffect(() => {
    fetch('drivers.json')
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.drivers);
        setFilteredDrivers(data.drivers); // Initialize with all drivers
      })
      .catch((error) => console.error('Error fetching drivers data:', error));
  }, []);

  useEffect(() => {
    setFilteredDrivers(
      drivers.filter((driver) => 
        (nationalityFilter ? driver.nationality === nationalityFilter : true) &&
        (teamFilter ? driver.team === teamFilter : true)
      )
    );
  }, [nationalityFilter, teamFilter, drivers]);

  const handleNationalityChange = (e) => {
    setNationalityFilter(e.target.value);
  };

  const handleTeamChange = (e) => {
    setTeamFilter(e.target.value);
  };

  const uniqueTeams = [...new Set(drivers.map(driver => driver.team))]; // Get unique teams

  return (
    <div className="carros-page">
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
          filteredDrivers.map((driver, index) => (
            <Driver key={index} driver={driver} />
          ))
        ) : (
          <p>No drivers available</p>
        )}
      </div>
    </div>
  );
};

const Driver = ({ driver }) => {
  return (
    <div className="driver-card">
      <h3>{driver.name}</h3>
      <p>Nationality: {driver.nationality}</p>
      <p>Team: {driver.team}</p>
      <p>Birthdate: {driver.birthdate} (Age: {driver.age})</p>
      <p>Driver Number: {driver.number}</p>
    </div>
  );
};

export default Pilotos;
