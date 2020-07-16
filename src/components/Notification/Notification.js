import React from 'react';

import './Notification.css';

const Notification = () => {
    return(
        <div className='notification'>
            <div className='notification__header'>
                <div className='notification__info'>
                    <img src='/utils/warning.svg' alt='warning' className='notification__icon' />
                    <div className='notification__text'>Уведомление</div>
                </div>
                <div className='notification__clock'>10:15</div>
            </div>
            <div className='notification__message'>Поступила новая рекомендация</div>
            <div className='notification__button'>
                <div className='notification__button-wrapper'>ок</div>    
            </div>
        </div>
    );
};

export default Notification;