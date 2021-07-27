import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
           <ul className="nav-links">
                <Link to='/'>
                    <li>Homepage</li>
                </Link>
                <Link to='/playlists'>
                    <li>Playlists</li>
                </Link>
                <Link to='/friendlist'>
                    <li>Friend List</li>
                </Link>
                <Link to='/activityfeed'>
                    <li> Friend Feed</li>
                </Link>
                <Link to='/login'>
                    <li>Login </li>
                </Link>
           </ul>
        </nav>
    )
}

export default Navbar
