import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDonors, setTotalDonations, setInventory, addBeneficiary, addStory } from '../redux/charitySlice';

const CharityDashboard = () => {
  const dispatch = useDispatch();
  const { charities, donors, totalDonations, beneficiaries, inventory, stories } = useSelector(state => state.charity);
  const donationHistory = useSelector(state => state.donation.donationHistory);

  const [newStoryTitle, setNewStoryTitle] = useState('');
  const [newStoryContent, setNewStoryContent] = useState('');
  const [selectedStoryCharityId, setSelectedStoryCharityId] = useState('');
  const [selectedBeneficiaryCharityId, setSelectedBeneficiaryCharityId] = useState('');
  const [newBeneficiaryName, setNewBeneficiaryName] = useState('');
  const [newBeneficiaryAge, setNewBeneficiaryAge] = useState('');

  useEffect(() => {
    dispatch(setDonors([
      { id: 1, name: 'John Doe', amount: 100, anonymous: false, charityId: 1 },
      { id: 2, name: 'Jane Doe', amount: 200, anonymous: true, charityId: 2 },
    ]));
    dispatch(setTotalDonations(300));
    dispatch(setInventory([{ id: 1, item: 'Food Packages', quantity: 50 }]));
  }, [dispatch]);

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    margin: '20px 0',
  };

  const handleAddStory = () => {
    if (!newStoryTitle || !newStoryContent || !selectedStoryCharityId) {
      alert('Please fill out all fields: title, content, and select a charity.');
      return;
    }

    const selectedCharity = charities.find(c => c.id === selectedStoryCharityId);

    if (!selectedCharity) {
      alert('Selected charity does not exist.');
      return;
    }

    if (selectedCharity.status !== 'approved') {
      alert('Your charity has not been approved yet.');
      return;
    }

    dispatch(addStory({ charityId: selectedStoryCharityId, title: newStoryTitle, content: newStoryContent }));

    setNewStoryTitle('');
    setNewStoryContent('');
    alert('Story added successfully!');
  };

  const handleAddBeneficiary = () => {
    if (!newBeneficiaryName || !newBeneficiaryAge || !selectedBeneficiaryCharityId) {
      alert('Please fill out all fields: name, age, and select a charity.');
      return;
    }

    const selectedCharity = charities.find(c => c.id === selectedBeneficiaryCharityId);

    if (!selectedCharity) {
      alert('Selected charity does not exist.');
      return;
    }

    if (selectedCharity.status !== 'approved') {
      alert('Your charity has not been approved yet.');
      return;
    }

    dispatch(addBeneficiary({
      charityId: selectedBeneficiaryCharityId,
      name: newBeneficiaryName,
      age: newBeneficiaryAge
    }));

    setNewBeneficiaryName('');
    setNewBeneficiaryAge('');
    alert('Beneficiary added successfully!');
  };

  return (
    <div>
      <h2 style={headingStyle}>Charity Dashboard</h2>

      {/* Add Beneficiary Form */}
      <div style={formStyle}>
        <h3>Add a Beneficiary</h3>
        <label style={labelStyle}>
          Select Charity:
          <select
            style={inputStyle}
            onChange={(e) => setSelectedBeneficiaryCharityId(e.target.value)}
            value={selectedBeneficiaryCharityId}
          >
            <option value="">-- Select a charity --</option>
            {charities.map(charity => (
              <option key={charity.id} value={charity.id}>{charity.name}</option>
            ))}
          </select>
        </label>

        <input
          type="text"
          style={inputStyle}
          placeholder="Beneficiary Name"
          value={newBeneficiaryName}
          onChange={(e) => setNewBeneficiaryName(e.target.value)}
        />
        <input
          type="number"
          style={inputStyle}
          placeholder="Beneficiary Age"
          value={newBeneficiaryAge}
          onChange={(e) => setNewBeneficiaryAge(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleAddBeneficiary}>Add Beneficiary</button>
      </div>

      {/* Add a Story Form */}
      <div style={formStyle}>
        <h3>Add a Story</h3>
        <label style={labelStyle}>
          Select Charity:
          <select
            style={inputStyle}
            onChange={(e) => setSelectedStoryCharityId(e.target.value)}
            value={selectedStoryCharityId}
          >
            <option value="">-- Select a charity --</option>
            {charities.map(charity => (
              <option key={charity.id} value={charity.id}>{charity.name}</option>
            ))}
          </select>
        </label>

        <input
          type="text"
          style={inputStyle}
          placeholder="Story Title"
          value={newStoryTitle}
          onChange={(e) => setNewStoryTitle(e.target.value)}
        />
        <textarea
          style={{ ...inputStyle, height: '100px' }}
          placeholder="Story Content"
          value={newStoryContent}
          onChange={(e) => setNewStoryContent(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleAddStory}>Add Story</button>
      </div>
    </div>
  );
};

export default CharityDashboard;
