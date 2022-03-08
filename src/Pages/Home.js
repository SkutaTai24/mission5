import React from 'react';
import './Home.css';

import HomeHeader from '../components/HomeHeader.jsx';
import HomeBody from '../components/HomeBody';
import HomeFooter from '../components/HomeFooter'

function Home() {
  return (
    <div className='Home'>
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
    </div>
  );
}

export default Home;