import React, { useState } from 'react';
import './Sidebar.css';
import { Link, Outlet, useNavigate } from 'react-router-dom'; 
import { FaHotel, FaPowerOff, FaStream } from 'react-icons/fa';

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
  };

  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <div>
      <button  className='btn close-btn position-fixed z-2 text-white  px-1 py-0 d-block' 
      style={{left: '20px'}}
      onClick={toggleSidebar}>
          <FaStream />
        </button>
    <div className={`sidebar position-fixed z-1   ${sidebarOpen ? 'd-block ' : 'd-none '}`} id='side-nav'>
      <div className='header-box px-2 pt-3 pb-4 '>
        <h1 className='fs-1 '>Resort</h1>
         
      
        
      </div>
      {/* Other sidebar content */}
      <ul className='list-unstyled px-2 '>
        <li className=''><Link className='text-decoration-none px-3 py-2  d-block' to='/admin'><i className="fa-solid fa-house p-2 "></i>Bookingdetails</Link></li>
        <li className=''><Link className='text-decoration-none px-3 py-2  d-block' to='/admin/RestaurentBookView'><i className="fa-solid fa-hotel p-2  "></i>Restaurent Booking</Link></li>
       
        {/* <li className=''><Link className='text-decoration-none px-3 py-2  d-block' to='/admin/CreateRoomType'><i className="fa-solid fa-house p-2 "></i>Createroomtype</Link></li> */}
        
      </ul>
      <hr className='h-color mx-2 ' />

      <ul className='list-unstyled px-2    '>
        <li className='' onClick={handleLogout}><a href="/login" className='text-decoration-none px-3 py-2  d-block'><i class="fas fa-power-off p-2 "></i>Logout</a></li>
      </ul>
    </div>
    <div className=' d-flex justify-content-end align-content-lg-end '><Outlet /></div>
    
  </div>
);
};

export default SideBar;