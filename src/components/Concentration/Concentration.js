import React from 'react';

import './Concentration.css';

const Concentration = () => {
    return(
        <div className='concentration'>
            <div className='concentration__header'>
                <div className='concentration__text'>Содержание металла в концентрате, %</div>
                <div className='concentration__options'>
                    <select>
                        <option selected>Fe(общ.)</option>
                    </select>
                </div>
            </div>
            <div className='concentration__values'>
                <div className='concentration__item'>
                    <div className='concentration__value concentration__value--bad'>61,60</div>
                    <div className='concentration__explanation'>факт 9:00</div>
                </div>
                <div className='concentration__item'>
                    <div className='concentration__value concentration__value--good'>61,46</div>
                    <div className='concentration__explanation'>прогноз 10:00</div>
                </div>
                <div className='concentration__item'>
                    <div className='concentration__value concentration__value--good'>61,42</div>
                    <div className='concentration__explanation'>прогноз 11:00</div>
                </div>
                <div className='concentration__item'>
                    <div className='concentration__value concentration__value--good'>61,45</div>
                    <div className='concentration__explanation'>прогноз 12:00</div>
                </div>
                <div className='concentration__item'>
                    <div className='concentration__value concentration__value--good'>61,45</div>
                    <div className='concentration__explanation'>среднее за смену</div>
                </div>
            </div>
            <div className='graph'>
                There is should be graph
            </div>
        </div>
    );
};

export default Concentration;