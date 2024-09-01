// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  includeShipping: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleShipping: (state) => {
      state.includeShipping = !state.includeShipping;
    },
  },
});

export const { addToCart, removeFromCart, toggleShipping } = cartSlice.actions;
export default cartSlice.reducer;
