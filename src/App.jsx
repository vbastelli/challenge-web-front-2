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

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/pilotos" element={<Pilotos />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
