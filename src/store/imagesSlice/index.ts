import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../types';
import { fetchData } from '../../service';

const initialState: RootState = {
    images: {
        images: []
    },
    error: {
        hasError: false,
        errorMessage: null,
    },
    loading: false,
};


const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImages(state, action) {
            state.images.images = action.payload;
        },
        setError(state, action: PayloadAction<{ hasError: boolean, errorMessage: string | null }>) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.images = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = { hasError: true, errorMessage: action.error.message || 'An unknown error occurred' };
            state.loading = false;
        });
    },
});

export const { setImages, setError } = imagesSlice.actions;
export default imagesSlice.reducer;
export const selectImages = (state: RootState) => state.images.images;
export const selectError = (state: RootState) => state.error;
export const selectLoading = (state: RootState) => state.loading;