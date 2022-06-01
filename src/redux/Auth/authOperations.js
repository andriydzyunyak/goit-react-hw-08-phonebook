import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/auth-api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (values, { rejectWithValue }) => {
    try {
      const user = await API.registerUser(values);
      token.set(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (values, { rejectWithValue }) => {
    try {
      const user = await API.loginUser(values);
      token.set(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await API.logoutUser();
    token.unset();
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const user = await API.fetchCurrentUser();
      return user;
    } catch (error) {}
  }
);
