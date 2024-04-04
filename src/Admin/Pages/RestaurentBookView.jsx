import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantBookView = () => {
    const [data, setData] = useState([]);
    const [refresh,setrefresh]=useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(`http://localhost:4000/find/RestaurentBooking`);
                console.log(response);
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);


    let handleDelete= async (id)=>{

        try{
          console.log('resposne');
          let response=await axios.delete(`http://localhost:4000/delete/restaurent/${id}`)
          console.log(response);
          alert('delete Succesfully')
          
      
        }
        catch (err){
            console.log(err);
            alert(err.response.data)
        }
      
      }

    return (
        <div className="container-fluid">
        <h1 className='text-center text-white p-2 bg-dark bg-gradient text-uppercase'>Restaurant Booking</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map((booking, index) => (
                <div className="col mb-4 mt-4" key={index}>
                    <div className="card bg-gradient z-0 bg-dark text-white border-0">
                        <div className="card-body">
                            <h5 className="card-title mb-4 fs-3 fst-normal fw-semibold text-uppercase">{booking.Name}</h5>
                            <p className="card-text">Email: {booking.Email}</p>
                            <p className="card-text">Date: {booking.date}</p>
                            <a href="#"><button onClick={() => handleDelete(booking._id)} className='btn bg-black text-white'>Delete</button></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
                
    );
};

export default RestaurantBookView;
