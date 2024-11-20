// DonationList.js
// DonationList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCampaign } from '../redux/donationSlice';
import { Link } from 'react-router-dom';

const DonationList = () => {
  const dispatch = useDispatch();
  const charities = useSelector(state => state.charity.charities);

  const handleCampaignClick = (campaign) => {
    dispatch(setSelectedCampaign(campaign));
  };

  return (
    <div>
      <h2>Donation Campaigns</h2>
      {charities.length > 0 ? (
        <ul>
          {charities.map(campaign => (
            <li key={campaign.name}>
              <h3>{campaign.name}</h3>
              <p>{campaign.description}</p>
              <Link to="/donate" onClick={() => handleCampaignClick(campaign)}>
                <button>Donate Now</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No campaigns available. Be the first to donate!</p>
      )}
    </div>
  );
};

export default DonationList;
