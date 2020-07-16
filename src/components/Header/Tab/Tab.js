import React from 'react';
import './Tab.css';

const Tab = ({ title, isActive }) => {
    return <div className={`tab ${isActive ? 'tab--Active' : ''}`}>{title}</div>
}

export default Tab;