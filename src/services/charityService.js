import api from './api';

const charityService = {
  // Fetch all charities
  getCharities: async () => {
    try {
      const charities = await api.get('/charities');
      return charities;
    } catch (error) {
      console.error('Error fetching charities:', error);
      throw error; // Rethrow the error for further handling
    }
  },

  // Fetch a charity by its ID
  getCharityById: async (charityId) => {
    try {
      const charity = await api.get(`/charities/${charityId}`);
      return charity;
    } catch (error) {
      console.error(`Error fetching charity with ID ${charityId}:`, error);
      throw error;
    }
  },

  // Create a new charity
  createCharity: async (charityData) => {
    try {
      const newCharity = await api.post('/charities', charityData);
      return newCharity;
    } catch (error) {
      console.error('Error creating charity:', error);
      throw error;
    }
  },

  // Update an existing charity
  updateCharity: async (charityId, charityData) => {
    try {
      const updatedCharity = await api.put(`/charities/${charityId}`, charityData);
      return updatedCharity;
    } catch (error) {
      console.error(`Error updating charity with ID ${charityId}:`, error);
      throw error;
    }
  },

  // Delete a charity
  deleteCharity: async (charityId) => {
    try {
      await api.delete(`/charities/${charityId}`);
      return { message: 'Charity deleted successfully' };
    } catch (error) {
      console.error(`Error deleting charity with ID ${charityId}:`, error);
      throw error;
    }
  },
};

export default charityService;
