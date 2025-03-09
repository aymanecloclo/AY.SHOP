import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slicers/userSlicers';
import shopReducer from "../slicers/shopSlice";
const store=configureStore({
    reducer:{
        user:userReducer,
          shop: shopReducer
    }
})

export default store;