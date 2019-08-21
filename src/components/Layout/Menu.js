import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
	<header id="menu" className="bg-dark sticky-top">
		<nav className="navbar navbar-expand container">
			<NavLink to="/blog-platzi-redux" className="nav-link text-light pl-0">
				Usuarios
		</NavLink>
			<NavLink to="/blog-platzi-redux/tareas" className="nav-link text-light">
				Tareas
		</NavLink>
		</nav>
	</header>
);

export default Menu;