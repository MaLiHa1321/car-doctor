import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingTable from "./BookingTable";

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [booking, setBooking] = useState([])

    const url =`http://localhost:5000/booking?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBooking(data)
        })
    },[url])


    const handleDelete = id =>{
        const proceed = confirm('are you sure');
        if(proceed){
             fetch(`http://localhost:5000/booking/${id}`,{
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
             })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert("deleted successful")
                    const remainng = booking.filter(booking => booking._id !== id);
                    setBooking(remainng)
                }
             })
        }
}

const handleConfirm = id =>{
    const proceed = confirm('are you sure');
    if(proceed){
        fetch(`http://localhost:5000/booking/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({status: confirm})

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
               const remaing = booking.filter(booking => booking._id !== id)
               const updated = booking.find(booking => booking._id === id);
               updated.status = 'confirm';
               const newBookings = [updated, ...remaing]
               setBooking(newBookings)
            }
        })
    }
}




    return (
        <div>
            {booking.length}

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        booking.map(booking => <BookingTable 
            key={booking._id}
             handleDelete={handleDelete} 
             handleConfirm={handleConfirm}
             booking={booking}></BookingTable>)
     }
    
    
     
    </tbody>
 
    
  </table>
</div>
            
        </div>
    );
};

export default Bookings;