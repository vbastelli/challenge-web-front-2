import React, { useState } from 'react';
import './estilo.css';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (username && password) {
      if (isRegistering) {
        // Save username and password to SessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        alert('Registrado com sucesso!');
      } else {
        // Check if the username is registered
        const storedUsername = sessionStorage.getItem('username');
        const storedPassword = sessionStorage.getItem('password');

        if (storedUsername === username && storedPassword === password) {
          alert('Logado com sucesso!');
        } else {
          alert('Nome ou senha inválido.');
        }
      }
      // Clear input fields
      setUsername('');
      setPassword('');
    } else {
      alert('Por favor coloque usuário e senha.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>{isRegistering ? 'Registrar' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="icon">🔒</span>
          </div>
          <button type="submit" className="login-btn">
            {isRegistering ? 'Registrar' : 'Login'}
          </button>
        </form>
        <p className="register-link">
          {isRegistering ? 'Já tem uma conta?' : "Não tem uma conta?"}{' '}
          <a href="#" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Login' : 'Registrar'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
