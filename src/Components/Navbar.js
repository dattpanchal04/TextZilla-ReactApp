// rfc = react base component
import React from 'react'
// impt - Import PropTypes
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className={`offcanvas-header bg-${props.mode}`}>
                    <h2 className="offcanvas-title" id="offcanvasNavbarLabel">TextUtils</h2>
                    <button type="button" className="btn-close text-light bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className={`offcanvas-body text-${props.mode} bg-${props.mode}`}>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link className="nav-link h4" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link h4" href="https://github.com/dattpanchal04">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link h4" to="/about">{props.aboutText}</Link>
                    </li>
                    <li>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-3`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <h5 id="text">Dark Mode</h5>
                        </div>
                    </li>
                    <li> 
                        <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <strong>Welcome to TextUtils!</strong> We hope this application will very usefull for you. Thank you for visit!
                        <button type="button" className="btn-close btn-primary" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

// Props is pass the components values 
// Pass Objects proptypes. Send a valid datatypes like strings or integer number or array or object etc.
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string        
}

// By Default props
// Navbar.defaultProps = {
//     title: "Set title here",
//     aboutText: "About text here"
// };