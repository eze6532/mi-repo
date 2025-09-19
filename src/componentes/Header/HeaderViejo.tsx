import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleNuevaPublicacion = () =>
    navigate("/crear-publicacion");
  
  return (
    <header>
      <nav >
        <h1>CompartoDeptoAr</h1>
        <li>
          <button onClick={handleNuevaPublicacion}>
            Nueva Publicación
          </button>
        </li>
        <ul>
          
          <li>
            <NavLink
              to='/'
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/mi-perfil'
            >
              Mi Perfil
            </NavLink>
           
          </li>
        </ul>
        
        
        
      </nav>
    </header>
  );
}
export default Header;