import {configureStore} from "@reduxjs/toolkit";
import {filterReducer as reducer} from "./reducers/filterReducer/filterReducer";


export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>