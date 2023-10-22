import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div className='container w-11/12 mx-auto'>
         <Banner></Banner>
         <About></About>
         <Services></Services>
        </div>
    );
};

export default Home;