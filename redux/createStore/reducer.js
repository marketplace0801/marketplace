import { createReducer } from "@reduxjs/toolkit";

export const createStoreReducer = createReducer({},
    {
        createStoreRequest: (state) => {
            state.loading = true
        },
        createStoreSuccess: (state, action) => {
            state.loading = false,
            state.msg = action.payload
        },
        createStoreFailure: (state, action) => {
            state.loading = false,
            state.msg = action.payload
        }
    }
)

