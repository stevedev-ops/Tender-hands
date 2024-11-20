import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveCharity, rejectCharity, deleteCharity } from '../redux/charitySlice';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const charities = useSelector(state => state.charity.charities);
  const charityApplications = useSelector(state => state.charity.charityApplications);

  // Example data for the pie chart (you can modify this based on actual state data)
  const pieChartData = {
    labels: ['Pending', 'Approved', 'Rejected'],
    datasets: [
      {
        data: [charityApplications.filter(c => c.status === 'pending').length, charities.length, charityApplications.filter(c => c.status === 'rejected').length],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF5733'],
        hoverBackgroundColor: ['#FFB84D', '#2F8BDE', '#FF4C3B']
      }
    ]
  };

  const handleApprove = (id) => {
    dispatch(approveCharity(id));
  };

  const handleReject = (id) => {
    dispatch(rejectCharity(id));
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this charity?');
    if (confirmed) {
      dispatch(deleteCharity(id)); // Delete the selected charity from both lists
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.header}>Admin Dashboard</h2>

      {/* Pie Chart Section */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartHeader}>Charity Application Status</h3>
        <div style={styles.chartWrapper}>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Charity Applications Section */}
      <div style={styles.section}>
        <h3 style={styles.sectionHeader}>Review Charity Applications</h3>
        {charityApplications.length > 0 ? (
          <ul style={styles.list}>
            {charityApplications.map((charity) => (
              <li key={charity.id} style={styles.listItem}>
                <h4>{charity.name}</h4>
                <p>{charity.description}</p>
                <p>Status: {charity.status}</p>
                <div>
                  <button
                    onClick={() => handleApprove(charity.id)}
                    disabled={charity.status !== 'pending'}
                    style={styles.button}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(charity.id)}
                    disabled={charity.status !== 'pending'}
                    style={styles.button}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDelete(charity.id)}
                    style={styles.buttonDelete}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending charity applications.</p>
        )}
      </div>

      {/* Approved Charities Section */}
      <div style={styles.section}>
        <h3 style={styles.sectionHeader}>Approved Charities</h3>
        {charities.length > 0 ? (
          <ul style={styles.list}>
            {charities.map((charity) => (
              <li key={charity.id} style={styles.listItem}>
                <h4>{charity.name}</h4>
                <p>{charity.description}</p>
                <p>Status: {charity.status}</p>
                <div>
                  <button
                    onClick={() => navigate(`/charity/${charity.id}`)}
                    style={styles.button}
                  >
                    View Charity
                  </button>
                  <button
                    onClick={() => handleDelete(charity.id)}
                    style={styles.buttonDelete}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No approved charities yet.</p>
        )}
      </div>
    </div>
  );
};

// Inline styles for the Admin Dashboard
const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  chartContainer: {
    width: '80%',
    marginBottom: '40px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  chartHeader: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  chartWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    width: '80%',
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sectionHeader: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    padding: '10px',
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    margin: '5px',
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#36A2EB',
    color: '#fff',
    cursor: 'pointer',
  },
  buttonDelete: {
    margin: '5px',
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#FF5733',
    color: '#fff',
    cursor: 'pointer',
  }
};

export default AdminDashboard;
