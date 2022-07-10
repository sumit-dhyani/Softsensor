import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='tohome' to="/"><h1>Store -&gt;</h1></Link>
            <Link className='tocart' to="/cart">Cart</Link>
        </nav>
    );
};

export default Navbar;