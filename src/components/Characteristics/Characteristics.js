import React from 'react';

import './Characteristics.css';

const Characteristics = () => {
    return(
        <div className='characteristics'>
            <div className='characteristics__text'>Характеристики руды, %</div>
            <div className='characteristics__table characteristics-table'>
                <div className='characteristics-table__row characteristics-table__row--header'>
                    <div className='characteristics-table__item characteristics-table__name'></div>
                    <div className='characteristics-table__item characteristics-table__value-now'>текущее</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>через 1 час</div>
                </div>
                <div className='characteristics-table__row characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>ПО</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>63,97</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>64,23</div>
                </div>
                <div className='characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>Г</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>20</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>20</div>
                </div>
                <div className='characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>Ю</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>10</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>15</div>
                </div>
                <div className='characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>З</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>25</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>35</div>
                </div>
                <div className='characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>С</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>40</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>25</div>
                </div>
                <div className='characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>Э 48</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>5</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>5</div>
                </div>
                <div className='characteristics-table__row'>
                    <div className='characteristics-table__item characteristics-table__name'>...</div>
                    <div className='characteristics-table__item characteristics-table__value-now'>-</div>
                    <div className='characteristics-table__item characteristics-table__value-next'>-</div>
                </div>
            </div>
        </div>
    );
};

export default Characteristics;