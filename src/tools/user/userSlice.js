import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { themes } from '../../util';

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out successfully.');
    },

    toggleTheme: (state) => {
      const { light, dark } = themes;

      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { login, logout, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
