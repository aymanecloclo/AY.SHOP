import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slicers/userSlicers';
import shopReducer from "../slicers/shopSlice";
import cartslice from  '../slicers/cartSlice';
const store=configureStore({
    reducer:{
        user:userReducer,
          shop: shopReducer,
            cart: cartslice,
    }
})

export default store;