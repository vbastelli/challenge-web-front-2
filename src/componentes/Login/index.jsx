import React, { useState } from 'react';
import './estilo.css';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Novo estado para verificar se o usuário está logado

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (username && password) {
      if (isRegistering) {
        // Salva nome de usuário e senha no SessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        alert('Registrado com sucesso!');
      } else {
        // Verifica se o nome de usuário está registrado
        const storedUsername = sessionStorage.getItem('username');
        const storedPassword = sessionStorage.getItem('password');

        if (storedUsername === username && storedPassword === password) {
          alert('Logado com sucesso!');
          setIsLoggedIn(true); // Atualiza o estado para logado
        } else {
          alert('Nome ou senha inválido.');
        }
      }
      // Limpa os campos de entrada
      setUsername('');
      setPassword('');
    } else {
      alert('Por favor coloque usuário e senha.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Atualiza o estado para deslogado
    sessionStorage.removeItem('username'); // Remove o nome de usuário do SessionStorage
    sessionStorage.removeItem('password'); // Remove a senha do SessionStorage
    alert('Deslogado com sucesso!');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {isLoggedIn ? ( // Condição para mostrar a interface de logout
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
              <button type="submit" className="login-btn" disabled={isLoggedIn}> {/* Desabilita o botão se o usuário estiver logado */}
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
