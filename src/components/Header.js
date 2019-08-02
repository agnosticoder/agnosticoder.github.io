import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>Header
            <NavLink to='/' exact={true} activeClassName='selected'>Home</NavLink>
            <NavLink to='/projects' activeClassName='selected' >Projects</NavLink>
            <NavLink to='/goals' activeClassName='selected' >Goals</NavLink>
            <NavLink to='/about' activeClassName='selected' >About</NavLink>
            <NavLink to='/blogs' activeClassName='selected' >Blogs</NavLink>
            <NavLink to='/contact' activeClassName='selected' >Contact</NavLink>
        </div>
    );
};

export default Header;