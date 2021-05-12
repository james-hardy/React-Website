import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <NavLink 
                className = "nav-link"
                activeClassName = "active"
                isActive = { () => window.location.pathname === "/"}
                to = '/'
            >
            <i class="fas fa-home"></i>
            </NavLink>
            <br/>
            <NavLink 
                className = "nav-link"
                activeClassName = "active"
                isActive = { () => window.location.pathname === "/album"}
                to = '/album'
            >
                <i class="fas fa-th"></i>
            </NavLink>
        </>
        //these would replace what we have 
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <a className="navbar-brand" href="/">
                    //this would show up as a link
        //         My Profile
        //     </a>
        // </nav>
    )
}

export default Nav;