import { configureStore } from "@reduxjs/toolkit";
import WhetherSlice from "./Slices/WhetherSlice";
const store = configureStore({
    reducer: {
      weather: WhetherSlice,
    },
  });
  
  export default store;