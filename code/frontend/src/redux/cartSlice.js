import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const addToCartThunk = createAsyncThunk(
  'product/addToCart',
  async ({ cart, token }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.post(`/cart/add?token=${token}`, cart);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductsFromCartThunk = createAsyncThunk(
  'product/getProductsFromCartThunk',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.get(`/cart?token=${token}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProductFromCartThunk = createAsyncThunk(
  'cart/deleteProductFromCart',
  async ({ productId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPro.delete(
        `/cart/delete/${productId}?token=${token}`
      );
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateQuantityThunk = createAsyncThunk(
  'cart/updateQuantityThunk',
  async ({ product, token }, { rejectWithValue }) => {
    // console.log(product);
    try {
      const { data } = await axiosPro.patch(
        `/cart/update/${product.id}?token=${token}&quantity=${product.quantity}`
      );
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoading: false,
    products: [],
    total: 0,
    err: false,
  },
  reducers: {},
  extraReducers: {
    [addToCartThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addToCartThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [addToCartThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [getProductsFromCartThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductsFromCartThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.cartItems;
      state.total = action.payload.totalCost;
      state.err = false;
    },
    [getProductsFromCartThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [deleteProductFromCartThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteProductFromCartThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [deleteProductFromCartThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
    [updateQuantityThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateQuantityThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = false;
    },
    [updateQuantityThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = true;
    },
  },
});

export default cartSlice;
