import React from 'react';
import BasicTable  from './components/BasicTable'
function Auction() {
  return (
    <div className='auction'>
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