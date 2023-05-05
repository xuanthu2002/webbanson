import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice.js';
import cartSlice from './cartSlice.js';
import categorySlice from './categorySlice.js';
import filterSlice from './filterSlice.js';
import productSlice from './productSlice.js';

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    category: categorySlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
