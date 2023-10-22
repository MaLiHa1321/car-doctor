import React from 'react';
import Banner from './Banner';
import About from './About';

const Home = () => {
    return (
        <div className='container w-11/12 mx-auto'>
         <Banner></Banner>
         <About></About>
        </div>
    );
};

export default Home;