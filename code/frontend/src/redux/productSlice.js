import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const getAllProductsThunk = createAsyncThunk(
  'products/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.get('/product');
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductThunk = createAsyncThunk(
  'products/getProductThunk',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.get(`/product/${id}`);
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  'product/updateProductThunk',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.post(
        `/product/update/${product.id}`,
        product.data
      );
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewProductThunk = createAsyncThunk(
  'product/addNewProductThunk',
  async (newProduct, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.post('/product/add', newProduct);
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  'product/deleteProductThunk',
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.delete(`/product/delete/${productId}`);
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    products: [],
    product: {},
    err: false,
  },
  reducers: {},
  extraReducers: {
    [getAllProductsThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllProductsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.err = false;
    },
    [getAllProductsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [getProductThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.err = false;
    },
    [getProductThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [updateProductThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateProductThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [updateProductThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [addNewProductThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addNewProductThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [addNewProductThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [deleteProductThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteProductThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [deleteProductThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
  },
});

export default productSlice;
