import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-style'>
            <div className='icon'>
                <Link to="/">Mock Quiz</Link>
            </div>
            <div className='nav-link'>
                <Link to="/topics">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
            
            
            
        </div>
    );
};

export default Header;