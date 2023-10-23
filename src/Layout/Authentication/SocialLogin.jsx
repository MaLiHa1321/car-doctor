import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = (media) =>{
        media()
        .then(res =>{
            console.log(res.user)
            navigate('/')
    
        })
        .catch(err => {
            console.log(err)
        })
    }
 
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
            <div>
                <button onClick={() => handleGoogle(googleUser)}  className='btn btn-neutral'>Google</button>
            </div>
            <div>
                <button className='btn btn-neutral'>Facebook</button>
            </div>
            <div>
                <button className='btn btn-neutral'>Linkdin</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;