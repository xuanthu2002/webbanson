import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const getAllCategoriesThunk = createAsyncThunk(
  'category/getAllCategoriesThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.get('/category');
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    isLoading: false,
    categories: [],
    err: false,
  },
  reducers: {},
  extraReducers: {
    [getAllCategoriesThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllCategoriesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.err = true;
    },
    [getAllCategoriesThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
  },
});

export default categorySlice;
