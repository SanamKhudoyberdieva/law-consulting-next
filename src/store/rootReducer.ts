import { combineReducers } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import homeSlice from "./slices/homeSlice";
import generalSlice from "./slices/generalSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    homeReducer: homeSlice,
    generalReducer: generalSlice
})

export default rootReducer;