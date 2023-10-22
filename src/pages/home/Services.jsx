import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
        })
    },[])
    return (
        <div >
            <div className='space-y-2 text-ceneter'>

            <h3 className='text-xl text-center font-bold text-orange-500'>Service</h3>
            <h2 className='text-2xl md:text-5xl font-bold text-center'>Our Service Area</h2>
            <p className='text-base w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
            
        </div>
    );
};

export default Services;