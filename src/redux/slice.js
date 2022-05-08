import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'
import React from 'react'


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const contactsApi = createApi({

    reducerPath: 'contactsApi',
    baseQuery,
    endpoints: (builder) => ({
      fetchContacts: builder.query({
        query: (token) => ({
          url :`/contacts`,
          method: 'GET',

        }),
        providesTags:['Contacts'],
      }),
      deleteContact: builder.mutation({
        query: (contactID) => ({
            url:`/contacts/${contactID}`,
            method: 'DELETE',
        }),
        invalidatesTags:['Contacts'],
      }),
      AddContact: builder.mutation({
        query: (data) => ({
            url:`/contacts`,
            method: 'POST',
            body: data,
        }),
        invalidatesTags:['Contacts'],
      }),
    }),
  })
  

  export const {useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi
// console.log(useDeleteContactMutation);