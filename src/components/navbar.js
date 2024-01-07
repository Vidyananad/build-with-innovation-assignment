import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    <nav>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/login">Login<li></li></Link>
      </ul>
    </nav>
}

export default Navbar;