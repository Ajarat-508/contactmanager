import React from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

function Header(props) {
    const {branding} = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark
         bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}</a>
                <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    )
}

Header.defaultProps = {
    branding: 'myApp'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header
