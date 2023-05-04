import {createSlice} from "@reduxjs/toolkit";

const initialIsLoginState = {
  isLogin : false
}

const loginCheckSlise = createSlice({
  name : 'isLogin',
  initialState : initialIsLoginState,
  reducers : {
    isLogin(state, action) {
      state.isLogin = action.payload;
    },
  }
})

export const loginCheckAction = loginCheckSlise.actions;
export default loginCheckSlise.reducer;