import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const getOrdersThunk = createAsyncThunk(
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

export const cancelOrderThunk = createAsyncThunk(
    'order/cancel',
    async ({ token, id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosPro.put(
                `/order/cancel?token=${token}&id=${id}`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const doneOrderThunk = createAsyncThunk(
    'order/cancel',
    async ({ token, id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosPro.put(
                `/order/done?token=${token}&id=${id}`
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
        err: false,
    },
    reducers: {},
    extraReducers: {
        [getOrdersThunk.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getOrdersThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.err = false;
        },
        [getOrdersThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = true;
        },
        [cancelOrderThunk.pending]: (state, action) => {
            state.isLoading = true;
        },
        [cancelOrderThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.err = false;
        },
        [cancelOrderThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = true;
        },
        [cancelOrderThunk.pending]: (state, action) => {
            state.isLoading = true;
        },
        [cancelOrderThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.err = false;
        },
        [cancelOrderThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = true;
        },
    },
});

export default orderSlice;