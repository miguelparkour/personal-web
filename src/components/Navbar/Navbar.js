import React from 'react';
import { NavLink } from 'react-router-dom';  // Importa NavLink para los enlaces de navegación.
import './Navbar.css';  // Importa el CSS.

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" activeClassName="active-link">Inicio</NavLink>
      {/* Puedes agregar más enlaces aquí */}
    </nav>
  );
}

export default Navbar;
