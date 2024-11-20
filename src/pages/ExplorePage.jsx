import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for charities
const sampleCharities = [
  {
    id: 1,
    name: "Pads for Girls",
    description: "Help provide sanitary towels and hygiene education to schoolgirls in Sub-Saharan Africa.",
    category: "Education & Health",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Water for All",
    description: "Providing clean water and sanitation facilities to underserved communities.",
    category: "Health & Clean Water",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Support for Girls Education",
    description: "Empowering girls with access to education, sanitary products, and health support.",
    category: "Education",
    logo: "https://via.placeholder.com/150",
  }
];

function ExplorePage() {
  const [charities, setCharities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCharities(sampleCharities);
  }, []);

  const handleDonateRedirect = (charityName) => {
    alert(`Redirecting to donate page for ${charityName}`);
    navigate('/login');
  };

  const handleJoinAsDonorRedirect = () => {
    alert("Redirecting to donor sign up page");
    navigate('/login');
  };

  return (
    <div style={{
      fontFamily: 'Roboto, sans-serif',
      background: 'linear-gradient(to right, black,blue,black)',
      padding: '50px 10px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{
        textAlign: 'center',
        color: 'white',
        marginBottom: '30px',
        fontSize: '36px',
        fontWeight: '700',
      }}>Explore Charities</h1>

      <p style={{
        textAlign: 'center',
        color: 'red',
        fontSize: '18px',
        marginBottom: '40px',
        maxWidth: '800px',
      }}>
        Discover and support various charitable causes that are making a difference in communities.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        marginBottom: '50px',
      }}>
        {charities.length > 0 ? (
          charities.map((charity) => (
            <div key={charity.id} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              width: '300px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img src={charity.logo} alt={charity.name} style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2 style={{
                  color: '#0066cc',
                  fontSize: '22px',
                  fontWeight: '600',
                  marginBottom: '10px',
                }}>{charity.name}</h2>
                <p style={{
                  fontSize: '16px',
                  color: '#444',
                  lineHeight: '1.6',
                  marginBottom: '15px',
                }}>
                  {charity.description}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  marginBottom: '15px',
                  fontStyle: 'italic',
                }}>
                  <strong>Category:</strong> {charity.category}
                </p>
                <button
                  style={{
                    background: 'linear-gradient(to right, black,blue,black)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                  onClick={() => handleDonateRedirect(charity.name)}
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No charities available at the moment.</p>
        )}
      </div>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h3 style={{
          color: '#0066cc',
          fontSize: '28px',
          marginBottom: '20px',
          fontWeight: '600',
        }}>Become a Donor</h3>
        <p style={{
          fontSize: '18px',
          color: '#555',
          marginBottom: '20px',
          lineHeight: '1.6',
        }}>
          Support our mission by becoming a regular donor. Set up a monthly donation or give a one-time gift to your favorite charity.
        </p>
        <button
          style={{
            background: 'linear-gradient(to right, black,blue,black)',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
            fontWeight: 'bold',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#004c99'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0066cc'}
          onClick={handleJoinAsDonorRedirect}
        >
          Join as a Donor
        </button>
      </div>
    </div>
  );
}

export default ExplorePage;
