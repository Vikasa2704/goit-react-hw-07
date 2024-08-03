import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { fetchTasks, addTask } from "./operations";


const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
    name: ""
  }
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    }
  }
});

export const contactsReducer = slice.reducer;
export const { deleteContacts, addContacts } = slice.actions;
