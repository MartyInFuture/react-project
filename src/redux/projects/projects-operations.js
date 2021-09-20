import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetErrorAction } from "../error/error-action";
import { setErrorStatus } from "../../helpers/function";
import { projectRejected } from "../auth/auth-slice";
// import { fetchNewToken } from "../auth/auth-operations";

const postProject = createAsyncThunk(
  "postProject/project",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post("/project", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(setErrorStatus(error));
    } finally {
      dispatch(resetErrorAction());
    }
  }
);

const getProjects = createAsyncThunk(
  "getProject/project",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { data } = await axios.get("/project");
      return data;
    } catch (error) {
      // fetchNewToken(["projectOperations", "getProjects"]);
      dispatch(projectRejected());
      return rejectWithValue(setErrorStatus(error));
    } finally {
      dispatch(resetErrorAction());
    }
  }
);

const projectOperations = {
  postProject,
  getProjects,
};
export default projectOperations;
