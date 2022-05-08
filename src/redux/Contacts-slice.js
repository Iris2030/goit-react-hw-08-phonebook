import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContacts, deleteContacts} from "./Contacts-operations";

const initialState = {
    contacts: []
  };
  
  const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
      [getContacts.fulfilled](state, action) {
          console.log(state);
        state = action.payload;
        // state.token = action.payload.token;
      },
      [addContacts.fulfilled](state, action) {
        state = action.payload;
        // state.token = action.payload.token;

      },
      [deleteContacts.fulfilled](state, action) {

      },
    },
  });
  
  export default contactsSlice.reducer;