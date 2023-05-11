import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPro from './axiosConfig.js';

export const checkoutCartThunk = createAsyncThunk(
    'cart/checkoutThunk',
    async ({ token, orderDto }, { rejectWithValue }) => {
        try {
            const { data } = await axiosPro.post(
                `/order/checkoutCart?token=${token}`, orderDto
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        isLoading: false,
        err: false,
    },
    reducers: {},
    extraReducers: {
        [checkoutCartThunk.pending]: (state, action) => {
            state.isLoading = false;
        },
        [checkoutCartThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.err = false;
        },
        [checkoutCartThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = true;
        },
    },
});

export default checkoutSlice;