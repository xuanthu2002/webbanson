import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.post('/user/signup', user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosPro.post('/user/signin', user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    isLogin: !!localStorage.getItem('token'),
    err: false,
    token: localStorage.getItem('token'),
  },
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    },
    getToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: {
    [signupThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signupThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [signupThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [loginThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginThunk.fulfilled]: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('role', action.payload.role);
      localStorage.setItem('name', action.payload.firstName);
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLogin = true;
      state.err = false;
    },
    [loginThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoading = false;
      state.err = true;
    },
  },
});

export default authSlice;
