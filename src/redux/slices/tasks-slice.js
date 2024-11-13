import { createSlice } from "@reduxjs/toolkit";

let initialStat = { tasks: [], filterdTask: [], taskDetails: {} };

let tasksSlice = createSlice({
  name: "tasks-slice",
  initialState: initialStat,
  reducers: {
    refrechTasks(state, action) {
      state.tasks = action.payload;
      state.filterdTask = state.tasks;
    },

    createTask(state, action) {
      state.tasks = [action.payload, ...state];
      state.filterdTask = state.tasks;
    },

    filterTask(state, action) {
      state.filterdTask = state.tasks.filter((element) => element.status == action.payload);
      
    },

    resetFilter(state) {
      state.filterdTask = state.tasks;
    },

    changeStatus(state, action) {
      let task = state.tasks.find((element) => element.id === action.payload.id);
      task.status = action.payload.status;
      state.filterdTask = state.tasks;
      state.taskDetails = task;
    },
    showTaskDetails(state, actoin) {
      state.taskDetails = state.tasks.find((element) => element.id == actoin.payload.id);
    },
  },
});

export const tasksSliceReducer = tasksSlice.reducer;
export const tasksSliceActions = tasksSlice.actions;