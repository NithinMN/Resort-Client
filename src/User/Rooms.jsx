import React, { useEffect, useState } from 'react';
import './Rooms.css';
import room1 from '../Assets/rooom1.jpg';
import room2 from '../Assets/doubleroom.jpg';
import room3 from '../Assets/familyroom.jpg';
import room4 from '../Assets/deluxe.jpg';
import axios from 'axios';

const Rooms = () => {
  const [data, setData] = useState([]);

  



  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/find/addroom`);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="top">
        <div className="Room-top-image">
          <div className="Room-title text-white p-5">
            <h1 className="fs-1 mt-4">Rooms</h1>
            <p>
              Home &gt;&gt; <span>Rooms</span>{' '}
            </p>
          </div>
        </div>


        <section className="activities-paragraph">
        <div className="theme-container">
          <h3>Single Room</h3>
          <div className="Room-line">
            <hr className="" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="Room-second-p">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.</p>
              <h5 className="mt-4 text-black fw-semibold fs-4">Rate &gt; <span className="fw-semibold fs-4">$150/ Per night</span></h5>
              <p>Maximum : 1 Person</p>
              <a href="/login" className="btn home-btn mt-2 ">Book Now</a>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={room1} alt="" />
            </div>
          </div>
        </div>
      </section>

        <section className="activities-paragraph">
        <div className="theme-container">
          <h3>Double Room</h3>
          <div className="Room-line">
            <hr className="" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="Room-second-p">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.</p>
              <h5 className="mt-4 text-black fw-semibold fs-4 p-lg-2   ">Rate &gt; <span className="fw-semibold fs-4">$300/ Per night</span></h5>
                <p className='mx-2 '>Maximum : 2 Person</p>
              <a href="/login" className="btn home-btn mt-2 ">Book Now</a>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={room2} alt="" />
            </div>
          </div>
        </div>
      </section>

        <section className="activities-paragraph">
        <div className="theme-container">
          <h3>Family Room</h3>
          <div className="Room-line">
            <hr className="" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="Room-second-p">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.</p>
              <h5 className="mt-4 text-black fw-semibold fs-4">Rate &gt; <span className="fw-semibold fs-4">$700/ Per night</span></h5>
               <p>Maximum : 5 Person</p>
              <a href="/login" className="btn home-btn mt-2 ">Book Now</a>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={room3} alt="" />
            </div>
          </div>
        </div>
      </section>

        <section className="activities-paragraph">
        <div className="theme-container">
          <h3>Deluxe suit</h3>
          <div className="Room-line">
            <hr className="" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="Room-second-p">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.</p>
              <h5 className="mt-4 text-black fw-semibold fs-4">Rate &gt; <span className="fw-semibold fs-4">$1000/ Per night</span></h5>
              <p>Maximum : 2 Person</p>
              <a href="/login" className="btn home-btn mt-2 ">Book Now</a>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={room4} alt="" />
            </div>
          </div>
        </div>
      </section>



      </section>

      {data.map((room, index) => (
        <section key={index} className="activities-paragraph">
          <div className="theme-container">
            <h3>{room.title}</h3>
            <div className="Room-line">
              <hr className="" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="Room-second-p">{room.description}</p>
                <h5 className="mt-4 text-black fw-semibold fs-4">Rate &gt; <span className="fw-semibold fs-4">${room.rate} Per night</span></h5>
                <a href="/login" className="btn home-btn">Book Now</a>
              </div>
              <div className="col-md-6">
                <img className="w-100" src={room.image} alt="" />
              </div>
            </div>
          </div>
        </section>
      ))}

     
      {/* Similarly, add responsive sections for other room types */}

    </div>
  );
};

export default Rooms;
