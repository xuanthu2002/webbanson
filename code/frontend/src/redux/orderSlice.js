import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async ({ token }, { rejectWithValue }) => {
        try {
            const { data } = await axiosPro.get(
                `/order?token=${token}`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        isLoading: false,
        products: [],
        total: 0,
        err: false,
    },
    reducers: {},
    extraReducers: {
        [getOrders.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getOrders.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.err = false;
        },
        [getOrders.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = true;
        },
    },
});

export default orderSlice;