import {createReducer} from '@reduxjs/toolkit'

export const allShopsReducer = createReducer(
    {},
    {
        allshopsRequest: (state) => {
            state.loading = true
        },
        allshopsSuccess: (state, action) => {
            state.loading = false,
            state.shops = action.payload
        },
        allshopsFailure: (state, action) => {
            state.loading = false,
            state.msg = action.payload
        }
})