import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Recommendation from './components/Recommendation/Recommendation';
import Concentration from './components/Concentration/Concentration';
import Characteristics from './components/Characteristics/Characteristics';
import Ore from './components/Ore/Ore';
import Notification from './components/Notification/Notification';

const App = () => {
  return (<>
    <Header />
    <div className='content'>
      <div className='content__wrapper'>
        <Recommendation />
        <section className='payload'>
          <Concentration />
          <Characteristics />
          <div className='payload__col'>
            <Ore />
            <Notification />
          </div>
        </section>
      </div>
    </div>
  </>);
}

export default App;
