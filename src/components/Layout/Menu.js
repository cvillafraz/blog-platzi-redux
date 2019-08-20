import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
	<header id="menu" className="bg-dark sticky-top">
		<nav className="navbar navbar-expand container">
			<NavLink to="/" className="nav-link text-light pl-0">
				Usuarios
		</NavLink>
			<NavLink to="/tareas" className="nav-link text-light">
				Tareas
		</NavLink>
		</nav>
	</header>
);

export default Menu;