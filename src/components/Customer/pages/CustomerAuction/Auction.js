import React from 'react';
import BasicTable  from './components/BasicTable'
import Navbar from '../../Navbar';
function Auction() {
  return (
    <div className='auction'>
      <Navbar/>
      <h1>Auction Details</h1>
      <h2>Auction Eligibility</h2>
      <h2>Upcoming Auctions</h2>
      <div>
        <BasicTable />
      </div>
    </div>
  );
}

export default Auction;