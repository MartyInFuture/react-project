import { createSlice } from "@reduxjs/toolkit";
import {
  addTask,
  getSprintsTasks,
  deleteSprintsTask,
  patchTaskHours,
  patchTitleSprint,
} from "./task-operations";

const initialState = {
  items: [],
  error: null,
  loading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: {
    [addTask.fulfilled](state, { payload }) {
      state.error = null;
      state.items.push(payload);
      state.loading = false;
    },
    [addTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [getSprintsTasks.fulfilled](state, { payload }) {
      if (payload.message === "No tasks found") return initialState;
      if (payload.length === 0) {
        return false;
      }
      state.items = [...payload];
    },
    [deleteSprintsTask.fulfilled](state, { payload }) {
      console.log("PAYLOAD", payload);
      state.items = [
        ...state.items.filter((task) => {
          const taskId = task._id ?? task.id;
          return taskId !== payload;
        }),
      ];
    },
    [patchTaskHours.fulfilled](state, { payload }) {
      state.items = state.items.map((task) => {
        if (task._id !== payload.id) {
          return task;
        }
        task.hoursWasted = payload.wastedHours;
        task.hoursWastedPerDay = task.hoursWastedPerDay.map((itemDate) => {
          if (itemDate.currentDay === payload.date.currentDay) {
            return { ...itemDate, ...payload.date };
          }
          // console.log(itemDate);
          // console.log(task);
          return itemDate;
        });
        return task;
      });
      //  state.items;
    },
  },
});

export default tasksSlice.reducer;
