import React, { useState, useEffect } from 'react';
import './estilo.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('link_default_da_imagem');
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const [email, setEmail] = useState('');
  const [loginDate, setLoginDate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteDrivers')) || [];
    setFavoriteDrivers(savedFavorites);

    const storedEmail = sessionStorage.getItem('email');
    const storedLoginDate = sessionStorage.getItem('loginDate');
    const storedUsername = sessionStorage.getItem('username');
    const storedProfileImage = localStorage.getItem('profileImage');

    if (storedUsername) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
      setLoginDate(storedLoginDate);
    }
    
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  if (!isLoggedIn) {
    return (
      <div className="not-logged-container">
        <h1>Usuário não logado</h1>
        <p>Para acessar essa área, por favor, faça login.</p>
        <button className="login-button" onClick={handleLoginRedirect}>
          Ir para Login
        </button>
      </div>
    );
  }

  return (
    <section className='container'>
      <div className="user-profile montserrat">
        <h1 className="profile-title">Seja bem-vindo, {sessionStorage.getItem('username')}!</h1>
        <div className="profile-info">
          <img src={profileImage} alt="Foto de Perfil" className="profile-image" />
          <label className="custom-upload-label">
            Clique para alterar a foto de perfil
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleProfileImageChange(e)}
              className="profile-image-input"
            />
          </label>
        </div>
        <div className="user-info">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Data de Login:</strong> {new Date(loginDate).toLocaleString()}</p>
        </div>
        <div className="favorite-drivers">
          <h2 className="drivers-title">Pilotos Favoritos</h2>
          <div className="drivers-grid">
            {favoriteDrivers.length > 0 ? (
              favoriteDrivers.map((driver, index) => (
                <div key={index} className="driver-card">
                  <div className="driver-icon">👤</div>
                  <p className="driver-name">{driver}</p>
                </div>
              ))
            ) : (
              <p className="no-drivers">Nenhum piloto favorito encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
