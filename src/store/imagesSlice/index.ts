import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootStateImages } from '../../types';
import { fetchData } from '../../service';
import { RootState } from '../index';

const initialState: RootStateImages = {
    images: null,
    error: {
        hasError: false,
        errorMessage: null,
    },
    loading: true,
    page: 1,
    totalPages: 1,
};

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImages(state, action) {
            state.images = action.payload;
        },
        setError(state, action: PayloadAction<{ hasError: boolean, errorMessage: string | null }>) {
            state.error = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.images = action.payload.data;
            state.loading = false;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = { hasError: true, errorMessage: action.error.message || 'An unknown error occurred' };
            state.loading = false;
        });
    },
});

export const { setImages, setError, setPage } = imagesSlice.actions;
export default imagesSlice.reducer;
export const selectImages = (state: RootState) => state.images;
export const selectPage = (state: RootState) => state.images.page;
export const selectTotalPages = (state: RootState) => state.images.totalPages;
