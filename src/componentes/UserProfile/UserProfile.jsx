import React, { useState, useEffect } from 'react';
import './estilo.css'; // Estilos separados para o componente
import { useNavigate } from 'react-router-dom'; // Use useNavigate em vez de useHistory

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('link_default_da_imagem');
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const [email, setEmail] = useState(''); // Para armazenar o email
  const [loginDate, setLoginDate] = useState(''); // Para armazenar a data de login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Para verificar se o usuário está logado
  const navigate = useNavigate(); // Substitui useHistory

  // Função para lidar com a troca da imagem de perfil
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem('profileImage', reader.result); // Armazena a imagem no localStorage
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
    const storedUsername = sessionStorage.getItem('username');
    const storedProfileImage = localStorage.getItem('profileImage'); // Recupera a imagem do localStorage

    if (storedUsername) {
      setIsLoggedIn(true); // Usuário está logado
      setEmail(storedEmail);
      setLoginDate(storedLoginDate);
    }
    
    // Se houver uma imagem de perfil armazenada, define-a
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  // Redireciona para a página de login
  const handleLoginRedirect = () => {
    navigate('/login'); // Navegação programática para a página de login
  };

  // Se o usuário não estiver logado, exibe a mensagem de não logado
  if (!isLoggedIn) {
    return (
      <div className="user-profile not-logged montserrat">
        <h1>Usuário não logado</h1>
        <button className="login-button" onClick={handleLoginRedirect}>
          Ir para Login
        </button>
      </div>
    );
  }

  // Caso o usuário esteja logado, exibe o perfil
  return (
    <section className='container'>
      <div className="user-profile montserrat">
        <h1 className="profile-title">Seja bem-vindo, {sessionStorage.getItem('username')}!</h1>
  
        {/* Foto de Perfil */}
        <div className="profile-info">
          <img src={profileImage} alt="Foto de Perfil" className="profile-image" />
          <label className="custom-upload-label">
            Clique para alterar a foto de perfil
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="profile-image-input"
            />
          </label>
        </div>
  
        {/* Informações do Usuário */}
        <div className="user-info">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Data de Login:</strong> {new Date(loginDate).toLocaleString()}</p>
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
    </section>
  );
}

export default UserProfile;
