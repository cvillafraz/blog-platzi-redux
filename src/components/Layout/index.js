import React from 'react'
import Menu from './Menu'

const Layout = ({ children }) => {
	return (
		<>
			<Menu />
			<div className="container mt-5">{children}</div>
		</>
	)
}

export default Layout
