import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/"><h1>Store -&gt;</h1></Link>
        </nav>
    );
};

export default Navbar;