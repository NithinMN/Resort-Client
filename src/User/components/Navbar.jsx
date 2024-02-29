import React, { useState } from 'react';
import { FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg text-bg-light h-25 p-3">
        <div className="container-fluid d-flex "> 
          <Link className="navbar-brand fs-2 m-0" to="/">
            <FaHotel />Resort
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}>
            <ul className="navbar-nav justify-content-center flex-grow-1 gap-4">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link  to="/About" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Rooms">
                  Rooms
                </Link>
              </li>
              <li
                className={`nav-item dropdown mx-2 ${isDropdownOpen ? 'show' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={toggleDropdown}
                >
                  Pages
                </Link>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Services">
                    Services
                    </Link>
                  </li>
                  <li><li><hr class="dropdown-divider"/></li>
                    <Link className="dropdown-item" to="/Restaurent">
                    Restaurent
                    </Link>
                  </li>
                 
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/Activities">
                      Activities
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end p-2  ">
          <Link className="btn  main-btn btn-outline-success" to="/Signup">
            Book Now
          </Link>
        </div>
      </nav>
      <Outlet />
      {/* <div className="m-1"><Footer /></div> */}
    </div>
  );
};

export default Navbar;
