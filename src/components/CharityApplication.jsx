import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCharityDetails } from '../redux/charitySlice';

const CharityApplication = () => {
  const [charityName, setCharityName] = useState('');
  const [charityDescription, setCharityDescription] = useState('');
  const [amountToRaise, setAmountToRaise] = useState('');
  const [faqOpen, setFaqOpen] = useState(null); // State to track open FAQs
  const dispatch = useDispatch();

  const handleApply = () => {
    if (!charityName || !charityDescription || !amountToRaise) {
      alert('Please fill out all fields.');
      return;
    }

    dispatch(setCharityDetails({
      name: charityName,
      description: charityDescription,
      amountToRaise,
      status: 'pending', // Mark as pending until admin approves
    }));
    alert('Charity application submitted!');
  };

  const handleFaqToggle = (index) => {
    setFaqOpen(faqOpen === index ? null : index); // Toggle open/close
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Apply to be a Charity</h2>
      
      <input
        type="text"
        placeholder="Charity Name"
        value={charityName}
        onChange={(e) => setCharityName(e.target.value)}
        style={{
          width: '100%',
          marginBottom: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      
      <textarea
        placeholder="Charity Description"
        value={charityDescription}
        onChange={(e) => setCharityDescription(e.target.value)}
        style={{
          width: '100%',
          marginBottom: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          resize: 'none',
        }}
      />
      
      <input
        type="number"
        placeholder="Amount to Raise"
        value={amountToRaise}
        onChange={(e) => setAmountToRaise(e.target.value)}
        style={{
          width: '100%',
          marginBottom: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      
      <button
        onClick={handleApply}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit Application
      </button>

      {/* FAQ Section */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>Frequently Asked Questions</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <div
            onClick={() => handleFaqToggle(0)}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#007bff',
              marginBottom: '5px',
            }}
          >
            ❓ How are charities vetted?
          </div>
          {faqOpen === 0 && (
            <div style={{ paddingLeft: '20px', color: '#555' }}>
              Charities go through a comprehensive review process where they are evaluated based on several criteria, such as their mission, impact, financial health, and transparency.
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <div
            onClick={() => handleFaqToggle(1)}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#007bff',
              marginBottom: '5px',
            }}
          >
            ❔ Can I suggest a charity for approval?
          </div>
          {faqOpen === 1 && (
            <div style={{ paddingLeft: '20px', color: '#555' }}>
              Yes, you can suggest a charity for approval. There’s usually a form or contact option on the platform where you can provide details about the charity you want to recommend.
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <div
            onClick={() => handleFaqToggle(2)}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#007bff',
              marginBottom: '5px',
            }}
          >
            ❓ What happens if a charity doesn't meet the criteria?
          </div>
          {faqOpen === 2 && (
            <div style={{ paddingLeft: '20px', color: '#555' }}>
              If a charity doesn't meet the criteria, it might be rejected during the review process.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharityApplication;
