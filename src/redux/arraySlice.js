import { createSlice } from '@reduxjs/toolkit';

const arraySlice = createSlice({
  name: 'sharedArray',
  initialState: [],
  reducers: {
    // addItem: (state, action) => {
    //     state.push(action.payload);
    //   }
    // },
    addItem: (state, action) => {
      console.log(action.payload);
      const exists = state.some(item => 
        JSON.stringify(item) === JSON.stringify(action.payload)
      );
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addItem, removeItem } = arraySlice.actions;
export default arraySlice.reducer;