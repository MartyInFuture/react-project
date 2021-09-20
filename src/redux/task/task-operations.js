import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTask = createAsyncThunk("task/addTask", async (sprintId, task) => {
  try {
    const { data } = await axios.post(`/task/${sprintId}`, task)
    return data
  } catch (error) {
    console.log(error);
  }
});

export const getSprintsTasks = createAsyncThunk(
  "task/getTAsks",
  async (sprintId) => {
    try {
      const { data } = await axios.get(sprintId);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
