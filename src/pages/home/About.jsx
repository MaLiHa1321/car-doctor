import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row jus">
                  <div className='w-1/2 relative'>
                  <img src={person} className="w-3/4 h-full rounded-lg shadow-2xl" />
                  <img src={parts} className="w-1/2 rounded-lg absolute right-5 top-1/2 shadow-2xl border-8 border-gray-400" />
                  </div>
                    <div className='space-x-5 lg:w-1/2'>
                        <h2 className='text-xl pl-6 font-bold text-orange-400'>About us</h2>
                        <h1 className="text-2xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;