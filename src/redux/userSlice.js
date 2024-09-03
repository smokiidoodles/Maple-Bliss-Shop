
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.username = '';
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
