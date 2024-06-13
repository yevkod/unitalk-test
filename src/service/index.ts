import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../helpers";
import { RootState } from "../store";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async(_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const page = state.images.page;
        try {
            const response = await axios.get(`${API}/photos?page=${page}&client_id=${process.env.REACT_APP_USER_KEY}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);