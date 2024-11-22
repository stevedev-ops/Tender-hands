import React from 'react';

const About = () => {
  return (
    <div style={styles.aboutPage}>
      <header style={styles.header}>
        <h1 style={styles.heading}>About Our Donation Platform</h1>
        <p style={styles.subHeading}>Empowering Education through Hygiene and Health</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Problem Statement</h2>
        <p style={styles.text}>
          In many Sub-Saharan countries, school-going girls face significant challenges due to the inability to access sanitary pads and hygiene supplies for their menstrual periods. This results in many girls missing school, affecting their education.
        </p>
        <p style={styles.text}>
          Studies from the Ministry of Education in 2016 revealed that girls from low-income families miss up to 20% of school days annually due to a lack of sanitary towels. The data indicated that a girl in primary school (grades 6-8) can miss up to 18 weeks out of 108 weeks of learning, while those in high school may lose up to 24 weeks out of 144 weeks of schooling.
        </p>
        <p style={styles.text}>
          Our platform partners with organizations dedicated to providing not only sanitary towels but also clean water and sanitation facilities, ensuring girls can maintain menstrual hygiene as per UNICEF guidelines.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Solution</h2>
        <p style={styles.text}>
          To address this issue, we have created a platform that allows donors to contribute regularly to charities working to solve these challenges. By facilitating repeat donations, we enable a sustainable way to fund the provision of sanitary supplies, clean water, and sanitation facilities for school-going girls in need.
        </p>
        <p style={styles.text}>
          Our platform allows users to set up automated, recurring donations (e.g., monthly), ensuring a consistent flow of resources to charities. Donors can choose their preferred amount, and charities can use the funds to improve access to essential supplies and hygiene facilities for girls.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Who Can Use This Platform?</h2>
        <p style={styles.text}>This platform is designed to be used by three types of users:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>A Donor:</strong> A person who wants to support various charities by donating regularly or one-time.</li>
          <li style={styles.listItem}><strong>A Charity:</strong> An organization aiming to provide supplies and support to girls in need, applying for funding through our platform.</li>
          <li style={styles.listItem}><strong>An Administrator:</strong> A person who manages charity applications, monitors donations, and oversees the platform’s functioning.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>User Stories</h2>
        <h3 style={styles.subHeading}>As a donor, you should be able to:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Browse and select from a variety of charities you can donate to.</li>
          <li style={styles.listItem}>Create an account on the platform.</li>
          <li style={styles.listItem}>Make donations to selected charities.</li>
          <li style={styles.listItem}>Set up automated repeat donations (e.g., monthly).</li>
          <li style={styles.listItem}>Choose whether to be an anonymous donor.</li>
          <li style={styles.listItem}>Receive reminders about your donation at the same time each month.</li>
          <li style={styles.listItem}>Read stories about the beneficiaries of your donations.</li>
          <li style={styles.listItem}>Donate using various third-party services like PayPal or Stripe.</li>
        </ul>

        <h3 style={styles.subHeading}>As a charity, you should be able to:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Apply to be featured on the platform.</li>
          <li style={styles.listItem}>Set up your charity details once your application is approved.</li>
          <li style={styles.listItem}>View donations made by both anonymous and non-anonymous donors.</li>
          <li style={styles.listItem}>Track the total amount donated to your charity.</li>
          <li style={styles.listItem}>Create and post stories showcasing the impact of your donations.</li>
          <li style={styles.listItem}>Maintain a list of beneficiaries and inventory sent to them.</li>
        </ul>

        <h3 style={styles.subHeading}>As an administrator, you should be able to:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Review charity applications and approve or reject them.</li>
          <li style={styles.listItem}>Delete charities that are no longer active.</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Together, we can empower young girls to stay in school and continue their education, regardless of the challenges they face. Your generous donations make a real difference!
        </p>
      </footer>
    </div>
  );
};

const styles = {
  aboutPage: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  header: {
    background: '#127bf3',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    margin: '0',
  },
  subHeading: {
    fontSize: '18px',
    fontStyle: 'italic',
  },
  section: {
    margin: '20px 0',
  },
  sectionHeading: {
    fontSize: '28px',
    color: '#1e90ff',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '10px',
    padding: '0 10px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    fontSize: '16px',
    marginBottom: '8px',
    padding: '5px 10px',
    backgroundColor: '#e0f7fa',
    borderRadius: '5px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    marginTop: '30px',
    borderRadius: '8px',
  },
  footerText: {
    fontSize: '16px',
  },
};

export default About;
