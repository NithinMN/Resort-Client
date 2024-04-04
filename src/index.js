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
import '@fortawesome/fontawesome-free/css/all.css';



import Signup from './Signup';
import Services from './User/pages/Services';
import Rooms from './User/Rooms';
import Activities from './User/pages/Activities';
import Restaurent from './User/pages/Restaurent';
import SideBar from './Admin/Components/SideBar';
import BookingPage from './User/BookingPage';
import Login from './Login';
import BookingViewpage from './Admin/Pages/BookingViewpage';
import ContactMessages from './Admin/Pages/ContactMessages';
import CreateRoom from './Admin/Pages/CreateRoom';
import CreateRoomtype from './Admin/Pages/CreateRoomtype';
import RestaurentBookView from './Admin/Pages/RestaurentBookView';
import RegistersView from './Admin/Pages/RegistersView';
import PaymentPage from './User/PaymentPage';
import ReceiptPage from './User/ReceiptPage';
import PaymentSuccessPage from './User/PaymentSuccessPage';








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
        <Route path='PaymentPage' element={<PaymentPage/>}/> 
        <Route path='paymentsuccess' element={<PaymentSuccessPage/>}/> 

           
        
         
       
      </Route>


      
        <Route path='/admin' element={<SideBar/>}> 
        <Route index element={<BookingViewpage />} />
        <Route path='/admin/ContactMessages' element={<ContactMessages/>}/> 
        <Route path='/admin/RegistersView' element={<RegistersView/>}/> 
        <Route path='/admin/BookingViewpage' element={<BookingViewpage/>}/> 
        <Route path='/admin/RestaurentBookView' element={<RestaurentBookView/>}/> 
        <Route path='/admin/CreateRoom' element={<CreateRoom/>}/> 
        <Route path='/admin/CreateRoomtype' element={<CreateRoomtype/>}/> 


     

       </Route>
    </Routes>
  </BrowserRouter>
 </React.StrictMode>




 
);

reportWebVitals();
