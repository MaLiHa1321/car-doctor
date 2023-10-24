import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Herobanner from './Herobanner';
import ChooseUs from './ChooseUs';
import Team from './Team';

const Home = () => {
    return (
        <div className='container w-11/12 mx-auto'>
         <Banner></Banner>
         <About></About>
         <Services></Services>
         <Herobanner></Herobanner>
         <Team></Team>
         <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;