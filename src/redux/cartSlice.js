import { createSlice } from '@reduxjs/toolkit';
// The cart slice was adjusted to accomodate my new shipping method options.
const initialState = {
  items: [],
  includeShipping: false,
  shippingMethod: 'standard',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleShipping(state) {
      state.includeShipping = !state.includeShipping;
    },
    setShippingMethod(state, action) {
      state.shippingMethod = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, toggleShipping, setShippingMethod } = cartSlice.actions;
export default cartSlice.reducer;