// Header.js
import './estilo.css';
import Navbar from '../Nav';
import UserGreeting from '../UserGreeting'; // Ajuste o caminho conforme necessário

function Header() {
  return (
    <>
      <Navbar />
      <UserGreeting />
    </>
  );
}

export default Header;
