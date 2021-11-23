import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import {filterReducer} from "./reducers/filterReducer/filterReducer";
import {directionReducer} from "./reducers/directionReducer/directionReducer";

const reducer = combineReducers({
    filter: filterReducer,
    direction: directionReducer,
})

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>