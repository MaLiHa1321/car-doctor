import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../assets/images/banner/4.jpg'

const SingleService = () => {
    const service = useLoaderData()
    const {title,_id,img,description,facility} = service
    return (
        <div className='mt-8'>
            <div>
            <div className="hero min-h-[250px] relative" style={{backgroundImage: `url(${img1})`}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" text-5xl text-white  font-bold">Service</h1>
      <div className='bg-red-500 text-white p-4 w-1/5 mx-auto border-b-100 border-red-500 border-l-25 border-r-25 ' style={{position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center'}}>
        
     <p>Home/service</p>
    </div>
  
    </div>
  
  </div>
  
</div>
            </div>
            {/* <div className='mt-8'>

            <img src={img} alt="" />
            <h2>single data: {title}</h2>
           
            </div> */}
            <div className='flex flex-col md:flex-row'>
                <div className='mt-8 space-y-3'>
                <img src={img} alt="" />
                <h2 className='text-3xl font-bold'>Unique {title}</h2> 
                <p>{description}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-8'>
                {facility.map((item, index) => (
                            <div key={index} className='bg-gray-200 p-4 space-y-3 border-t-4 border-red-500'>
                                <h2 className='text-2xl font-bold'>{item.name}</h2>
                                <p>{item.details}</p>
                            </div>
                        ))}
                    
                </div>
                <h2 className='text-3xl font-bold'>3 Simple Steps to Process</h2>
                <p>{description}</p>
          
                </div>
                <div>
                 
                </div>



             
                 </div>

                 <Link to={`/checkout/${_id}`}>
            <button className='btn btn-primary'>Check Out</button>
            </Link>



                 
            </div>
            
       
    );
};

export default SingleService;