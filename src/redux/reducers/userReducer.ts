import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
   name: 'user',
   initialState:{
       login : '',
       token : '',
       auth  : false
   },
   reducers:{
       setLogin: (state, action) => {
           state.login = action.payload;
       },
       setToken: (state, action) => {
        state.token = action.payload;
       },
       setAuth: (state, action) => {
        state.auth = action.payload;
       }
   }
});

export const { setLogin, setToken, setAuth } = slice.actions;
export default slice.reducer;