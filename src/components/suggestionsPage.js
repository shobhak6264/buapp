import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/suggestionsPage.css'
export const SuggestionsPage = () => {
    return (
        <>
            <div className='displayCategories'>
                <div className='title'>
                    <h1>Up to something ?</h1>
                </div>
                <div className='categories'>
                    <span className='category-list'><Link to="/coffeeChat">Coffee Chat</Link></span>
                    <span className='category-list'>Meeting</span>
                    <span className='category-list'>Notification</span>
                    <span className='category-list'>Directory</span>
                </div>
            </div>
        </>
    )
};