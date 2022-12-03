import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to="/" className="navbar-brand">GDA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create-user" className="nav-link">Create New User</Link>
                </li>
                <li className="nav-item">
                    <Link to="/search-user" className="nav-link">Search User</Link>
                </li>    
                </ul>
            </div>  
        </nav>
        </>
    )
}

export default Header;