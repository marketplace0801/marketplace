import { configureStore } from "@reduxjs/toolkit";
import { createStoreReducer } from "./createStore/reducer";
import { allShopsReducer } from "./shops/reducer";

const store = configureStore({
    reducer:{
        allshops: allShopsReducer,
        createstore: createStoreReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;