import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  branch: {},
  userDetails: {},
  feePlan: {},
  paymentInfo: {},
  status: 'incomplete',
};

const enrollSlice = createSlice({
  name: 'enroll',
  initialState,
  reducers: {
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setFeePlan: (state, action) => {
      state.feePlan = action.payload;
    },
    setPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    resetEnrollment: state => {
      // Return the initial state directly
      return initialState;
    },
  },
});

export const {
  setBranch,
  setUserDetails,
  setFeePlan,
  setPaymentInfo,
  setStatus,
  resetEnrollment,
} = enrollSlice.actions;

export default enrollSlice.reducer;
