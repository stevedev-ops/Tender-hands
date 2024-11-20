import api from './api';

const donationService = {
  // Make a donation
  makeDonation: async (donationData) => {
    try {
      const donationResponse = await api.post('/donations', donationData);
      return donationResponse;
    } catch (error) {
      console.error('Error making donation:', error);
      throw error; // Rethrow the error for further handling
    }
  },

  // Fetch donation history for a specific user
  getDonationHistory: async (userId) => {
    try {
      const donationHistory = await api.get(`/donations/user/${userId}`);
      return donationHistory;
    } catch (error) {
      console.error(`Error fetching donation history for user ID ${userId}:`, error);
      throw error;
    }
  },

  // Fetch all donations for a specific charity
  getCharityDonations: async (charityId) => {
    try {
      const charityDonations = await api.get(`/donations/charity/${charityId}`);
      return charityDonations;
    } catch (error) {
      console.error(`Error fetching donations for charity ID ${charityId}:`, error);
      throw error;
    }
  },
};

export default donationService;
