import React, { Fragment } from 'react'
import Menu from './Menu'
const Layout = ({children}) => {
    return (
        <Fragment>
            <Menu />
            <div className="margen">
                {children}
            </div>
        </Fragment>
    )
}

export default Layout
