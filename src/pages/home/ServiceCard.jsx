import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
   const {_id,title,img,price} = service
    return (
        <div className='mt-8'>
            <div className="card w-78 h-78 border border-gray-400">
  <figure className="px-10 pt-10 w-full h-full">
    <img src={img} alt="Shoes" className="rounded-xl w-full h-[200px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='flex justify-between items-center'>

    <p className='text-xl text-orange-500'>Price: ${price}</p>
    <div className="card-actions">
     <Link to={`/serviceDetails/${_id}`}>
     <button className="btn btn-ghost text-orange-500">❯</button>
     </Link>
    </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ServiceCard;