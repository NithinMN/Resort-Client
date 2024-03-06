import React, { useState } from 'react';
import './Sidebar.css';
import { FaHotel, FaPowerOff } from 'react-icons/fa';
import { Link, Outlet, Routes, Route } from 'react-router-dom'; // Import Routes and Route

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='d-flex'>
      <div className='w-25'>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h2 className='text-white gap-2'>
          <span><FaHotel/></span> Resort
        </h2>
        <ul>
          <li><Link to='/admin'>BookingDetails</Link></li>
          <li><Link to='/admin/CustomersView'>CustomersView</Link></li>
          <li><Link to='/admin/ContactMessages'>ContactMessages</Link></li>
          <li><Link to='/admin/'></Link></li>
          <li><a href="#">customers</a></li>
          <li><a href="#">Contact Reviews</a></li>
          <li><a href="#">Available Rooms</a></li>
          <li className='bg-gradient'><a href="#">Logout <span className='m-lg-2'><FaPowerOff/></span></a></li>
        </ul>
      </div>
      </div>
      <div className='w-75 '>
      <Outlet/>
      </div>
    </div>
  );
};

export default SideBar;
