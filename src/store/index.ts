import { configureStore} from '@reduxjs/toolkit';
import imagesSlice from './imagesSlice';

export const store = configureStore({
    reducer: {
        images: imagesSlice
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


