import { createSlice } from '@reduxjs/toolkit';
import { addTask } from './task-operations';

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

    [addTask.pending](state) {
      state.loading = true;
    },

    [addTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default tasksSlice;
