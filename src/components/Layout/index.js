import React, { Fragment } from 'react'
import Menu from './Menu'
const Layout = ({ children }) => {
    return (
        <Fragment>
            <Menu />
            <div className="container mt-5">
                {children}
            </div>
        </Fragment>
    )
}

export default Layout
