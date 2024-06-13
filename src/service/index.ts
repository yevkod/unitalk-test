import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../helpers";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        try {
            const response = await axios.get(`${API}/photos?page=1&client_id=${process.env.REACT_APP_USER_KEY}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);