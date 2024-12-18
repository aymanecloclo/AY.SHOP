import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:'Aymane',
    isAuth:false,
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        userLogin:(state,action)=>{
            state.user=action.payload;
            state.isAuth=true;
        },
        userLogout:(state,action)=>{
           state.user=null,
           state.isAuth=true;

        }
    }
   
});
export const  {userLogin,userLogout}=userSlice.actions;
export default userSlice.reducer;