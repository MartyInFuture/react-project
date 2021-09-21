
import { createSlice } from '@reduxjs/toolkit';
import { addTask, getSprintsTasks } from './task-operations';


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

    [getSprintsTasks.fulfilled](state, action) {
      return {
        // error: null,
        // items: [...payload],
        // loading: false,
      };
    },


    [addTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [getSprintsTasks.fulfilled](state, { payload }) {
      state.items = [...payload];
    },
  },
});

export default tasksSlice.reducer;
