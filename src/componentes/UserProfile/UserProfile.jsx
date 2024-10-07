import React, { useState, useEffect } from 'react';
import './estilo.css'; // Estilos separados para o componente

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('link_default_da_imagem');
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const [email, setEmail] = useState(''); // Para armazenar o email
  const [loginDate, setLoginDate] = useState(''); // Para armazenar a data de login

  // Função para lidar com a troca da imagem de perfil
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Fetch favorites and user info from localStorage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteDrivers')) || [];
    setFavoriteDrivers(savedFavorites);
    
    // Lê o nome, email e data de login do sessionStorage
    const storedEmail = sessionStorage.getItem('email');
    const storedLoginDate = sessionStorage.getItem('loginDate');

    setEmail(storedEmail);
    setLoginDate(storedLoginDate);
  }, []);

  return (
    <div className="user-profile montserrat">
      <h1 className="profile-title">Seja bem-vindo, {sessionStorage.getItem('username')}!</h1>

      {/* Foto de Perfil */}
      <div className="profile-info">
        <img src={profileImage} alt="Foto de Perfil" className="profile-image" />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleProfileImageChange} 
          className="profile-image-input"
        />
        <p className="change-photo-text">Clique para alterar a foto de perfil</p>
      </div>

      {/* Informações do Usuário */}
      <div className="user-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Data de Login:</strong> {new Date(loginDate).toLocaleString()}</p> {/* Formatação da data */}
      </div>

      {/* Seção de Pilotos Favoritos */}
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
  );
};

export default UserProfile;
