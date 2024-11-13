import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slices/auth-slice";
import { tasksSliceReducer } from "./slices/tasks-slice";


let appReduxStore = configureStore({
  reducer: {
    auth: authSliceReducer,
    task: tasksSliceReducer
  }
});


export default appReduxStore;
