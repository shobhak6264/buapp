import React, { Component } from 'react';
import '../styles/coffeeChat.css';
import { InlineWidget } from 'react-calendly';
export const CoffeeChatpage = () => {
    return (
        <div className=''>
            <InlineWidget url="https://calendly.com/tsamph/30min?month=2024-03&date=2024-03-06"/>
        </div> 
    )
}