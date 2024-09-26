import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './componentes/Nav/index'; // Navbar component
import Tabela from './componentes/Tabela/index'; // CorridaSimulada page
import Pilotos from './componentes/Pilotos/index'; // Carros page
import SobreNos from './componentes/SobreNos/index'; // SobreNos page
import Login from './componentes/Login/index'; // Login page
import Error404 from './componentes/Error404/index'; // 404 Error page
import Home from './componentes/Home/index'; // Home component (you can create this or use another component)
import Footer from './componentes/Footer';
import Quiz from './componentes/Quiz'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          {/* Define the main path '/' */}
          <Route path="/" element={<Home />} />
          
          {/* Define your valid routes */}
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/pilotos" element={<Pilotos />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          
          {/* Catch all other routes and display the 404 page */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
