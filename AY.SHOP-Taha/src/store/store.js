import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slicers/userSlicers';

const store=configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;