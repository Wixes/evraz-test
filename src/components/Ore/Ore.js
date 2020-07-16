import React from 'react';

import './Ore.css';

const Ore = () => {
    return(
        <div className='ore'>
            <div className='information'>
                <div className='information__left'>
                    <div className='information__text'>Руда</div>
                    <div className='information__value'>250 т/ч</div>
                </div>
                <div className='prediction'>
                    <div className='prediction__result'>-5</div>
                    <div className='prediction__plan'>255 план час</div>
                </div>
            </div>
            <div className='progress'>
                    <div className='progress__completed'></div>
                    
                </div>
            <div className='plan'>
                <div className='plan__information'>
                    <div className='plan__value'>45 900 план смены</div>
                    <div className='plan__prediction'>
                        <div className='plan__text'>98% прогноз</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ore;