import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addSprint = createAsyncThunk(
  "sprint/addSprint",
  async (projectId, sprintData) => {
    try {
      const { data } = await axios.post(`/sprint/${projectId}`, sprintData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProjectsSprints = createAsyncThunk(
  "sprint/getSprints",
  async (projectId) => {
    try {
      const { data } = await axios.get(`/sprint/${projectId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeSprintsTitle = createAsyncThunk(
  "sprint/changeTitle",
  async (sprintId) => {
    try {
      const { data } = await axios.patch(sprintId);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteSprint = createAsyncThunk(
  "sprint/deleteSprint",
  async (sprintId) => {
    try {
      const { data } = await axios.delete(sprintId);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
