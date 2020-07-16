import React from 'react';

import './Header.css';

import Logo from '../Logo/Logo';
import Tab from './Tab/Tab';

const Header = () => {
    return(
        <div className='header'>
            <div className='header__wrapper'>
                <Logo />
                <div className='tabs'>
                    <Tab title='Рекомендации' isActive='true' />
                    <Tab title='История' />
                </div>
                
            </div>
        </div>
    );
};

export default Header;