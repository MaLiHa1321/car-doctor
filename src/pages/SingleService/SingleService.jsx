import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const service = useLoaderData()
    const {title,_id,img} = service
    return (
        <div className='mt-8'>
            <img src={img} alt="" />
            <h2>single data: {title}</h2>
            <Link to={`/checkout/${_id}`}>
            <button className='btn btn-primary'>Check Out</button>
            </Link>
            
        </div>
    );
};

export default SingleService;