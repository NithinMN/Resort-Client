import React from 'react';

const ReceiptPage = ({ img, amount,title, checkouthandler }) => {
  return (
    <div className='p-5 '>

      <div className="card p-0 w-100 " >
        <img src={img} alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
        <div className="mb-3"> {/* Added div for title */}
            <h3 className="card-title fs-6 fw-semibold ">{title}</h3>
          </div>
          <h5 className="card-title"><span>$</span>{amount}</h5>
          <button className="btn home-btn mb-3 " onClick={() => checkouthandler(amount)}>Book Now</button>
          <a className='  text-decoration-none text-dark p-0 ' href="/Rooms">More Details</a>
        </div>
        </div>
    </div>
  );
};

export default ReceiptPage;
