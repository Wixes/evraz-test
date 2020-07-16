import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo__picture' src='/utils/logo.png' alt='logo' />
        </div>
    );
};

export default Logo;