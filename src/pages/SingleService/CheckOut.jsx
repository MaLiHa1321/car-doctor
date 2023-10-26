
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {title,_id,img} = service;
    const {user} = useContext(AuthContext)

    const handleCheck = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const info =
        {
            customerName:name,
            email,
            img,
            service_id: _id,
            service: title,
            date,
            phone

        }
        console.log(info)

        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers :{
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        } )
        .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
            alert('your order is confirmd')
           }
        })


    }





    return (
        <div>
            <h2>{title}</h2>

           
      <form onSubmit={handleCheck} className="card-body">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="email" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" name='phone' placeholder="password" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Order confirm" />
        </div>
      </form>
    </div>
  
    );
};

export default CheckOut;