import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import charityReducer from './charitySlice';
import donationReducer from './donationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    charity: charityReducer,
    donation: donationReducer,
  },
});

export default store;
