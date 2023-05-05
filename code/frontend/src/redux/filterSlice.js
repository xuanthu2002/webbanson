import { createSlice, current } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    filterBy: 21,
    priceMin: 0,
    priceMax: 100000000,
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    filterByFilter: (state, action) => {
      state.filterBy = action.payload;
    },
    priceMinFilter: (state, action) => {
      state.priceMin = action.payload;
    },
    priceMaxFilter: (state, action) => {
      if (action.payload === 0) state.priceMax = 100000000;
      else state.priceMax = action.payload;
    },
  },
  extraReducers: {},
});

export default filterSlice;
