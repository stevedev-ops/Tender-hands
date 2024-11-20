import React from 'react';
import { useSelector } from 'react-redux';

const DonationHistory = () => {
  const donationHistory = useSelector(state => state.donation.donationHistory);

  return (
    <div>
      <h2>Your Donation History</h2>
      {donationHistory.length > 0 ? (
        <ul>
          {donationHistory.map((donation, index) => (
            <li key={index}>
              <h3>{donation.campaignTitle}</h3>
              <p>Amount Donated: ${donation.amount}</p>
              <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
              {donation.isAnonymous ? <p>Anonymous Donation</p> : <p>Donor: {donation.userName}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No donations yet.</p>
      )}
    </div>
  );
};

export default DonationHistory;
