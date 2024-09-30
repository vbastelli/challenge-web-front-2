// UserGreeting.js
import React from 'react';

const UserGreeting = () => {
  const username = sessionStorage.getItem('username');

  console.log('Username:', username); // Adicione este log para verificar se o nome está sendo recuperado

  return (
    <div style={{ color: 'white', position: 'absolute', right: '20px', top: '20px' }}>
      {username ? `Olá, ${username}!` : ''}
    </div>
  );
};

export default UserGreeting;
