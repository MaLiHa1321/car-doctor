import img1 from '../../assets/icons/check.svg';
import img2 from '../../assets/icons/deliveryt.svg';
import img3 from '../../assets/icons/group.svg';
import img4 from '../../assets/icons/person.svg';
import img5 from '../../assets/icons/quote.svg';
import img6 from '../../assets/icons/Wrench.svg';


const ChooseUs = () => {
    return (
        <div>
            <div className='text-center mt-8 space-y-2'>

            <h2 className='text-[#FF3811] text-xl font-bold '>Core Features</h2>
            <h1 className='text-2xl md:text-4xl font-bold'>Why Choose Us</h1>
            <p className='text-base'>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-5 mt-12'>
                <div className='border border-gray-300 p-5 w-10/12 mx-auto hover:bg-[#FF3811] hover:text-white'>
                    <img src={img1} alt="" />
                    <h2>100% Guranty</h2>
                </div>
                <div className='border border-gray-300 p-5 w-10/12 mx-auto hover:bg-[#FF3811] hover:text-white'>
                    <img src={img2} alt="" />
                    <h2>Timely Delivery</h2>
                </div>
                <div className='border border-gray-300 p-5 w-10/12 mx-auto hover:bg-[#FF3811] hover:text-white'>
                    <img src={img3} alt="" />
                    <h2>Expert Team</h2>
                </div>
                <div className='border border-gray-300 p-5 w-10/12 mx-auto hover:bg-[#FF3811] hover:text-white'>
                    <img src={img4} alt="" />
                    <h2>24/7 Support</h2>
                </div>
                <div className='border border-gray-300 p-5 w-10/12 mx-auto hover:bg-[#FF3811] hover:text-white'>
                    <img src={img6} alt="" />
                    <h2>Best Equipment</h2>
                </div>
            </div>
            
        </div>
    );
};

export default ChooseUs;