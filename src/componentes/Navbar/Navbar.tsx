
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#eee', padding: '1rem' }}>
      <Link to="/">Inicio</Link> | <Link to="/perfil">Perfil</Link> | <Link to="/logout">Cerrar sesión</Link>
    </nav>
  );
}
