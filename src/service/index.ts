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
            const linkHeader = response.headers['link'];
            let totalPages = 1;

            if (linkHeader) {
                const links = linkHeader.split(',').map((link: string) => link.trim());
                const lastLink = links.find((link: string | string[]) => link.includes('rel="last"'));
                if (lastLink) {
                    const match = lastLink.match(/page=(\d+)/);
                    if (match) {
                        totalPages = parseInt(match[1], 10);
                    }
                }
            }
            return {
                data: response.data,
                totalPages
            };
        } catch (error) {
            throw error;
        }
    }
);