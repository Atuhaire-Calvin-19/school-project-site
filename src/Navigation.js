import React from 'react'
import './Navigation.css' 
import {Link} from 'react-router-dom';


function Navigation() {
    return (
        <nav className="navbar"> 
            <h4>KING'S COLLEGE BUDO</h4>
            <ul className="navlinks">
                <Link to="/about" className="link-icon"> 
                    <li><h3>About</h3></li>
                </Link>

                <Link to ="/academics" className="link-icon"> 
                    <li><h3>Academics</h3></li>
                </Link>
                 
                <Link to="/co-curricular" className="link-icon"> 
                    <li><h3>Co-Curricular</h3></li>
                </Link>
                
                <Link to="/gallery" className="link-icon">
                    <li><h3>Gallery</h3></li> 
                </Link>
            </ul>  
        </nav>
    ) 
}

export default Navigation
