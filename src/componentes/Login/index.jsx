import React, { useState } from 'react';
import './estilo.css';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Novo estado para o email
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (username && password) {
      if (isRegistering) {
        // Salva nome de usuário, email e senha no SessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('email', email); // Salva email
        sessionStorage.setItem('password', password);
        alert('Registrado com sucesso!');
      } else {
        // Verifica se o nome de usuário está registrado
        const storedUsername = sessionStorage.getItem('username');
        const storedPassword = sessionStorage.getItem('password');

        if (storedUsername === username && storedPassword === password) {
          alert('Logado com sucesso!');
          sessionStorage.setItem('loginDate', new Date().toString()); // Salva a data de login
          setIsLoggedIn(true);
        } else {
          alert('Nome ou senha inválido.');
        }
      }
      setUsername('');
      setEmail(''); // Limpa o campo de email
      setPassword('');
    } else {
      alert('Por favor coloque usuário e senha.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email'); // Remove o email
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('loginDate'); // Remove a data de login
    alert('Deslogado com sucesso!');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {isLoggedIn ? (
          <>
            <h2>Bem-vindo, {sessionStorage.getItem('username')}!</h2>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
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
              {isRegistering && ( // Campo de email aparece somente no registro
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="icon">📧</span>
                </div>
              )}
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
              <button type="submit" className="login-btn" disabled={isLoggedIn}>
                {isRegistering ? 'Registrar' : 'Login'}
              </button>
            </form>
            <p className="register-link">
              {isRegistering ? 'Já tem uma conta?' : "Não tem uma conta?"}{' '}
              <a href="#" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Login' : 'Registrar'}
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
