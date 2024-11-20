import { createSlice } from '@reduxjs/toolkit';

const charitySlice = createSlice({
  name: 'charity',
  initialState: {
    charities: [],  // List of charities
    donors: [],      // List of donors
    totalDonations: 0,
    beneficiaries: [],
    inventory: [],
    stories: {},     // Stories associated with each charity
    charityApplications: [], // Track charity applications
  },
  reducers: {
    setCharityDetails: (state, action) => {
      state.charityApplications.push({ ...action.payload, status: 'pending' });
    },
    approveCharity: (state, action) => {
      const charityId = action.payload;
      const charityIndex = state.charityApplications.findIndex(c => c.id === charityId);

      if (charityIndex !== -1) {
        const charity = state.charityApplications[charityIndex];
        charity.status = 'approved';
        state.charities.push(charity);
        state.charityApplications.splice(charityIndex, 1);
      }
    },
    rejectCharity: (state, action) => {
      const charityId = action.payload;
      const charityIndex = state.charityApplications.findIndex(c => c.id === charityId);
      if (charityIndex !== -1) {
        state.charityApplications[charityIndex].status = 'rejected';
      }
    },
    deleteCharity: (state, action) => {
      const charityId = action.payload;
      state.charities = state.charities.filter(c => c.id !== charityId);
      state.charityApplications = state.charityApplications.filter(c => c.id !== charityId);
    },
    setDonors: (state, action) => {
      state.donors = action.payload;
    },
    setTotalDonations: (state, action) => {
      state.totalDonations = action.payload;
    },
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    addBeneficiary: (state, action) => {
      state.beneficiaries.push(action.payload);
    },
    addStory: (state, action) => {
      const { charityId, title, content } = action.payload;
      if (!state.stories[charityId]) {
        state.stories[charityId] = [];
      }
      state.stories[charityId].push({ title, content });
    },
  },
});

export const {
  setCharityDetails,
  approveCharity,
  rejectCharity,
  deleteCharity,
  setDonors,
  setTotalDonations,
  setInventory,
  addBeneficiary,
  addStory,
} = charitySlice.actions;

export default charitySlice.reducer;
