import React, { useState, useEffect, Component } from 'react';
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

export const Headercomponent = () => {
    return (
        <nav className='navbar'>
            <div className='logo'></div>
            <div className='menu-items'>
                <h1><Link to="/">Post</Link></h1>
                <h1><Link to="/coffeeChat">Find</Link></h1>
                <h1><Link to="/products">Connect</Link></h1>
                <h1><Link to="/">Calender</Link></h1>
                <h1><Link to="/about">Profile</Link></h1>
                <h1><Link to="/Login">Login</Link></h1>
            </div>
        </nav>
    )
}
