import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

    const navLink =<>
    <NavLink to="/" className="mr-3 text-xl">Home</NavLink>
    <NavLink to="/about" className="mr-3 text-xl">About</NavLink>
    <NavLink to="/service" className="mr-3 text-xl">Service</NavLink>
    <NavLink to="/blog" className="mr-3 text-xl">Blog</NavLink>
    <NavLink to="/contact" className="mr-3 text-xl">Contact</NavLink>
    <NavLink to="/booking" className="mr-3 text-xl">My cart</NavLink>
    </>

    return (
        <div>
          <div className="navbar bg-base-100 h-28">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
       <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
 
 

  <div className="navbar-end">
  {
  user?.email ? (
    <div className='flex justify-center items-center'>
        <div className="avatar-group -space-x-6">
      <div className="avatar">
        <div className="w-12">
          <img src={user.photoURL} alt={user.displayName} />

        </div>
       
      </div>
    </div>

    <button onClick={logOut} className='btn btn-outline btn-error'>Logout</button>
    </div>
  
  ) : (
    <button className='btn btn-outline btn-error'> <Link to="/login">Login</Link></button>
  )
}

 

  <div>

    <button className="btn btn-outline btn-error">Appointment</button>
  </div>
 


        </div>
        </div>
        </div>
    );
};

export default Navbar;