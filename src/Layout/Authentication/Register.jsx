
import img from '../../assets/images/login/login.svg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {

const {createUser} = useContext(AuthContext)
const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        createUser(email,password)
        .then(res => {
            console.log(res.user)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-12 md:flex-row">
          <div className=" w-1/2 mx-auto">
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full flex-1 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Username" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white">Register</button>
              </div>
              <div>
                <p className='text-center'>Or signup with</p>
                <SocialLogin></SocialLogin>
              </div>
              <p>Already have an account?<Link to="/login" className='text-orange-500'>Login</Link></p>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;