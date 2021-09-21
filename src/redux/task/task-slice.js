import { createSlice } from '@reduxjs/toolkit';
import { addTask, getSprintsTasks } from './task-operations';

const initialState = {
  items: [],
  error: null,
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
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
      if (payload.message === 'No tasks found') return initialState;
      if (payload.length === 0) {
        return false;
      }
      state.items = [...payload];
    },
  },
});

export default tasksSlice.reducer;
