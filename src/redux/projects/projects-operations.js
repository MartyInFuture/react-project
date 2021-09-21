import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getError } from "../error/error-handler";

const postProject = createAsyncThunk(
  "postProject/project",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post("/project", credentials);
      console.log("post project", data);
      return data;
    } catch (error) {
      dispatch(
        getError({
          error,
          cb: () => postProject(),
          operationType: "postProject/project",
        })
      );
      return rejectWithValue(error.message);
      // throw error;
    }
  }
);

const deleteProject = createAsyncThunk(
  "deleteProject/project",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`/project/${id}`);
      return id;
    } catch (error) {
      dispatch(
        getError({
          error,
          cb: () => deleteProject(),
          operationType: "deleteProject/project",
        })
      );
      return rejectWithValue(error.message);
      // throw error;
    }
  }
);

const addMember = createAsyncThunk(
  "member/addMember",
  async ({ id, email }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.patch(`/project/contributor/${id}`, email);
      return { data, id };
    } catch (error) {
      dispatch(
        getError({
          error,
          cb: () => addMember(),
          operationType: "member/addMember",
        })
      );
      return rejectWithValue(error.message);
      // throw error;
    }
  }
);

const getProjects = createAsyncThunk(
  "getProject/project",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get("/project");
      return data;
    } catch (error) {
      dispatch(
        getError({
          error,
          cb: () => getProjects(),
          operationType: "getProject/project",
        })
      );
      return rejectWithValue(error.message);
      // throw error;
    }
  }
);

const projectOperations = {
  postProject,
  getProjects,
  deleteProject,
  addMember,
};
export default projectOperations;
