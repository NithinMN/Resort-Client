import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './User/components/Navbar';
import Homepage from './User/Homepage';
import 'react-slideshow-image/dist/styles.css'
import About from './User/About';
import Contact from './User/Contact';
import Footer from './User/components/Footer';
import 'react-toastify/dist/ReactToastify.css';


import Signup from './Signup';
import Services from './User/pages/Services';
import Rooms from './User/Rooms';
import Activities from './User/pages/Activities';
import Restaurent from './User/pages/Restaurent';
import SideBar from './Admin/Components/SideBar';
import BookingPage from './User/BookingPage';
import Login from './Login';
import BookingViewpage from './Admin/Pages/BookingViewpage';
import Home from './Admin/Pages/Home';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Navbar />}> 
        <Route index element={<Homepage />}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Rooms' element={<Rooms/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Services' element={<Services/>}/>    
        <Route path='Activities' element={<Activities/>}/>    
        <Route path='Restaurent' element={<Restaurent/>}/>    
        <Route path='BookingPage' element={<BookingPage/>}/>    
      </Route>


      
        <Route path='/admin' element={<SideBar />}> 
        <Route index element={<BookingViewpage />} />
        <Route path='Login' element={<Login/>}/>
        {/* <Route path='/admin/BookingViewpage' element={<BookingViewpage />} /> */}

     

       </Route>
    </Routes>
  </BrowserRouter>
 </React.StrictMode>




 
);

reportWebVitals();
