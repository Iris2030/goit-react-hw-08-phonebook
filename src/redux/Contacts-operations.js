import axios from "axios";
 import { createAsyncThunk } from "@reduxjs/toolkit";

 axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

 export const getContacts = createAsyncThunk('contacts/get', async credentials =>{
    try{
    const {data} = await axios.get('/contacts', credentials);
    console.log(data);
    return data;

    }catch(error){
        console.log(error.message);
    }
});


export const addContacts = createAsyncThunk('contacts/post', async credentials =>{
    try{
    const {data} = await axios.post('/contacts', credentials);
    return data;
    }catch(error){
        console.log(error.message);
    }
});


export const deleteContacts = createAsyncThunk('contacts/delete', async credentials =>{
    try{
    const {data} = await axios.delete('/contacts/{contactId}', credentials);
    // token.set(data.token)
    return data;
    }catch(error){
        console.log(error.message);
    }
});
