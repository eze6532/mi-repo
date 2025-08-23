
import { NavLink } from 'react-router-dom';

function Header() {

  const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'text-yellow-300' : 'text-white';

  return (
    <header className='bg-gray-800 p-4 text-white'>
      <nav  className='flex flex-col md:flex-row justify-around'>
        <h1 className='text-xl font-bold mb-4 md:mb-0'>CompartoDeptoAr</h1>
        <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <li>
            <NavLink
              to='/'
              className={linkClass}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/MiPerfil'
              className={linkClass}
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