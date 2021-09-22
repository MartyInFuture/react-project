import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getError } from "../error/error-handler";

export const addTask = createAsyncThunk(
  "task/addTask",
  async ({ sprintId, task }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/task/${sprintId}`, task);
      return data;
    } catch (error) {
      dispatch(
        getError({
          error,
          cb: () => addTask(),
          operationType: "sprint/addSprint",
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getSprintsTasks = createAsyncThunk(
  "task/getTAsks",

  async (sprintId, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/task/${sprintId}`);
      return data;
    } catch (error) {
      dispatch(
        getError({
          error,
          cb: () => getSprintsTasks(),
          operationType: "task/getTAsks",
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSprintsTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId) => {
    try {
      await axios.delete(`/task/${taskId}`);
      return taskId;
    } catch (error) {}
  }
);

export const patchTaskHours = createAsyncThunk(
  "task/patchTaskHours",
  async (data, { getState }) => {
    try {
      const response = await axios.patch(
        `/task/${data.sprintId}`,
        data.taskObj
      );

      const responseObj = {
        date: response.data.day,
        wastedHours: response.data.newWastedHours,
        id: data.sprintId,
      };
      return responseObj;
    } catch (error) {}
  }
);
