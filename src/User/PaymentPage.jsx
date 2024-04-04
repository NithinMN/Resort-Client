import React, { useEffect } from 'react';
import ReceiptPage from './ReceiptPage';
import axios from 'axios';
import room1 from '../Assets/single.jpg';
import room2 from '../Assets/doubleroom.jpg';
import room3 from '../Assets/familyroom.jpg';
import room4 from '../Assets/deluxe.jpg';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
  }

  const checkouthandler = async (amount) => {
    try {
      // Fetch Razorpay key from the server
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");
      
      // Fetch order details from the server
      const { data: { order } } = await axios.post("http://localhost:4000/checkout", { amount });
      
      // Open Razorpay checkout
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "resort", 
        description: "ssss",
        order_id: order.id,
        prefill: {
          name: "ssss",
          email: "ssss@gmail.com",
          contact: 1234567891
        },
        notes: {
          "adress": "razorpay official"
        },
        theme: {
          "color": "#3399cc"
        },
        handler: async function(response) {
          // Handle the payment response
          try {
            // Send payment verification data to the server
            await axios.post("http://localhost:4000/paymentVerification", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
          } catch (error) {
            console.error("Error in payment verification:", error);
            // Handle error (e.g., show error message to the user)
          }
        }
      };
      
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in checkout:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className='vh-100 d-flex justify-content-center align-content-between col '>
      <ReceiptPage amount={150} title='Single Room' img={room1} checkouthandler={checkouthandler}/>
      <ReceiptPage amount={300} title="Double Room" img={room2} checkouthandler={checkouthandler}/>
      <ReceiptPage amount={700} title="Family Room" img={room3} checkouthandler={checkouthandler}/>
      <ReceiptPage amount={1000} title="Deluxe Suit" img={room4} checkouthandler={checkouthandler}/>
    </div>
  );
};

export default PaymentPage;
