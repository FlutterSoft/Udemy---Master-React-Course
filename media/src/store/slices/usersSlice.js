import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../thunks/fetchUsers'
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Update state object to show user we are loading data
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Update state object to show user that we have finished request successfully
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.error, (state, action) => {
            // Update state object to show user loading had an error
            state.isLoading = false
            state.error = action.error

        })
    }
})

export const usersReducer =  usersSlice.reducer