import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: 'Brian Clark',
    email: 'example@youremail.com',
    phone: '(123) 456 - 7890',
    company: 'BRIX Agency',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending to a backend
    alert('Message sent!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="phone" style={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="company" style={styles.label}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>Send message</button>
        </form>
      </div>
      <div style={styles.ctaContainer}>
        <h2 style={styles.ctaTitle}>Share your thoughts</h2>
        <p>We value your feedback and are here to help you with any questions or concerns.</p>
        <div style={styles.socialMediaIcons}>
          <button 
            style={styles.socialIcon} 
            onClick={() => window.location.href = 'https://facebook.com'}
          >
            <FaFacebook size={30} />
            <span style={styles.iconText}>Facebook</span>
          </button>
          <button 
            style={styles.socialIcon} 
            onClick={() => window.location.href = 'https://twitter.com'}
          >
            <FaTwitter size={30} />
            <span style={styles.iconText}>Twitter</span>
          </button>
          <button 
            style={styles.socialIcon} 
            onClick={() => window.location.href = 'https://instagram.com'}
          >
            <FaInstagram size={30} />
            <span style={styles.iconText}>Instagram</span>
          </button>
          <button 
            style={styles.socialIcon} 
            onClick={() => window.location.href = 'https://linkedin.com'}
          >
            <FaLinkedin size={30} />
            <span style={styles.iconText}>LinkedIn</span>
          </button>
          <button 
            style={styles.socialIcon} 
            onClick={() => window.location.href = 'https://youtube.com'}
          >
            <FaYoutube size={30} />
            <span style={styles.iconText}>YouTube</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles object for inline styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f4f4',
  
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginRight: '20px',
    width: '500px',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
    display: 'block',
    transition: 'color 0.3s ease',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    margin: '10px 0',
    border: 'f1 solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#127bf3',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    letterSpacing: '1px',
    fontSize: '16px',
  },
  ctaContainer: {
    maxWidth: '300px',
    padding: '20px',
    color: 'black',
  },
  ctaTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '15px',
    color: 'black',
    textTransform: 'uppercase',
  },
  socialMediaIcons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    background: '#1E1D1D',
    border: 'none',
    color: '#ffffff',
    fontSize: '18px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  iconText: {
    marginLeft: '10px',
    fontSize: '16px',
    fontWeight: 'bold',

  },
};

export default ContactPage;
