import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = https://66ae2ff3b18f3614e3b6fdc2.mockapi.io/;

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
        throw error;
    }
});