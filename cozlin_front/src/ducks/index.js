import {configureStore} from "@reduxjs/toolkit";
import pageNavigatorReducer from './pageNavigator';

const store = configureStore({
  reducer: {
    pageNavigator : pageNavigatorReducer,
  }
});




export default store;