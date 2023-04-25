import {createSlice} from "@reduxjs/toolkit";

const initialPageNavigatorState = {
  isCompany : false
}

const pageNavigatorSlise = createSlice({
  name : 'userType',
  initialState : initialPageNavigatorState,
  reducers : {
    isCompany(state, action) {
      state.isCompany = action.payload;
    },
  }
})

export const pageNavigatorAction = pageNavigatorSlise.actions;
export default pageNavigatorSlise.reducer;