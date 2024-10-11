import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tareas">Tareas</Link>
                </li>
                <li>
                    <Link to='/new_revista'>Nueva Revista</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className='registro' to="/registro">Registro</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
