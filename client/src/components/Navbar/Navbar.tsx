import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const [search, setSearch] = useState("")

    const handleSubmit = (e:any) => {
        e.preventDefault()
        //pass search to redux state
        console.log(search)
        setSearch("")
    }

    return (
        <nav>
           <ul className="nav-links">
                <Link to='/'>
                    <li>Homepage</li>
                </Link>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
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
