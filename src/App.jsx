import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './componentes/Nav/index'; 
import Tabela from './componentes/Tabela/index'; 
import Pilotos from './componentes/Pilotos/index';
import SobreNos from './componentes/SobreNos/index';
import Login from './componentes/Login/index'; 
import Error404 from './componentes/Error404/index'; 
import Home from './componentes/Home/index';
import Footer from './componentes/Footer';
import Quiz from './componentes/Quiz';
import Eventos from './componentes/Eventos/Eventos';
import Noticias from './componentes/News/index';
import Dados from './componentes/Dados/Dados';
import UserProfile from './componentes/UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabela" element={<Tabela />} />
            <Route path="/pilotos" element={<Pilotos />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/news" element={<Noticias />} />
            <Route path="/dados" element={<Dados />} />
            <Route path="/perfil" element={<UserProfile />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
