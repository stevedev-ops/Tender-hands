import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom

const LearnMore = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDonateClick = () => {
    navigate('/login'); // Navigate to the login page (adjust the path as needed)
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 20px', background: 'linear-gradient(to right, black,blue,black)', }}>
      <h1 style={{ textAlign: 'center', color: 'red', marginBottom: '30px', fontSize: '36px' }}>
        Why You Should Donate to Help School Girls in Need
      </h1>

      <section style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
        <h2 style={{ color: '#0066cc', fontSize: '24px', marginBottom: '15px' }}>The Problem</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          In many sub-Saharan countries, young school girls face a significant barrier to education due to the lack of access to basic hygiene products like sanitary pads. 
          Studies from the Ministry of Education in 2016 revealed that girls from impoverished families miss up to 20% of school days each year simply because they lack access to sanitary towels.
        </p>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          The challenges don't end with just sanitary products. Many schools lack basic sanitation facilities like toilets and clean water, which are crucial for proper menstrual hygiene.
          Without these essential facilities, girls are forced to stay home during their menstrual cycles, further affecting their education and well-being.
        </p>
      </section>

      <section style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
        <h2 style={{ color: '#0066cc', fontSize: '24px', marginBottom: '15px' }}>Why Your Donation Matters</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          Your donation can change the lives of many young girls by providing them with the sanitary products, clean water, and sanitation facilities they need to stay in school and achieve their dreams.
          When you donate to this cause, you're not just providing a product; you're giving these girls a chance at a brighter future.
        </p>

        <h3 style={{ color: '#0066cc', fontSize: '20px', marginTop: '20px' }}>Benefits of Donating</h3>
        <ul style={{ listStyleType: 'disc', marginLeft: '30px', color: '#555', fontSize: '18px', lineHeight: '1.8' }}>
          <li><strong>Impact Education:</strong> Your donation ensures that girls do not have to miss school because of their menstrual cycle, helping them stay on track with their education.</li>
          <li><strong>Promote Equality:</strong> By supporting girls in disadvantaged communities, you're helping create a more equal world where every girl has the opportunity to learn and thrive.</li>
          <li><strong>Encourage Health & Hygiene:</strong> Providing sanitary products and proper sanitation facilities ensures that girls can maintain their health, dignity, and comfort, even during menstruation.</li>
          <li><strong>Ongoing Support:</strong> With the option for recurring donations, you can provide continuous support to ensure the program is sustainable and long-term.</li>
          <li><strong>Direct Impact:</strong> Through the platform, you can track how your donation is being used and see the direct impact on the lives of the beneficiaries.</li>
          <li><strong>Anonymous Donations:</strong> If you prefer to remain anonymous, you can still contribute to the cause and make a difference without sharing your identity.</li>
        </ul>

        <h3 style={{ color: '#0066cc', fontSize: '20px', marginTop: '20px' }}>The Power of Regular Donations</h3>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          Donating regularly makes a huge difference. By setting up recurring monthly donations, you provide the organization with the resources needed to plan and execute their programs with certainty and sustainability. 
          Your support ensures that the girls have continuous access to sanitary products, water, and toilets, empowering them to focus on their education and overcome barriers to their success.
        </p>
      </section>

      <section style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
        <h2 style={{ color: '#0066cc', fontSize: '24px', marginBottom: '15px' }}>How You Can Help</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          Donating is easy and secure. Here's how you can get involved:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '30px', color: '#555', fontSize: '18px', lineHeight: '1.8' }}>
          <li>Sign up on our platform and create your donor account.</li>
          <li>Choose from a variety of impactful charities to support, like the one that provides sanitary products, water, and sanitation facilities for girls in need.</li>
          <li>Set up one-time or recurring donations according to your preference.</li>
          <li>Track the progress of your donation and see the difference you're making.</li>
          <li>Get regular updates and stories about the girls benefiting from your donations.</li>
        </ul>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          With your help, we can break the cycle of poverty, improve education, and empower young girls to achieve their full potential. 
          Together, we can create a future where every girl has access to the products and facilities she needs to succeed.
        </p>
      </section>

      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>Join Us Today</h2>
        <p style={{ fontSize: '18px', color: 'red', lineHeight: '1.8', marginBottom: '20px' }}>
          The change begins with you. A small donation can make a huge difference. 
          Your contribution will not only provide sanitary products but also help improve education and equality for young girls who need it the most.
        </p>
        <button 
          style={{
            background: 'linear-gradient(to right, grey,red,grey)',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '20px',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '20px',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#218838';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#28a745';
            e.target.style.transform = 'scale(1)';
          }}
          onClick={handleDonateClick} // Call the function to navigate
        >
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default LearnMore;
