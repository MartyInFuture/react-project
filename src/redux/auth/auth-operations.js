import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetErrorAction } from "../error/error-action";
import { setErrorStatus } from "../../helpers/function";
import { projectLogOut } from "../projects/newProject/newProjects-slice";

axios.defaults.baseURL = "https://sbc-backend.goit.global";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      token.set(data.accessToken);
      console.log(`data`, data);
      return data;
    } catch (error) {
      return rejectWithValue(setErrorStatus(error));
    } finally {
      dispatch(resetErrorAction());
    }
  }
);

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      await dispatch(logIn(credentials));

      return data;
    } catch (error) {
      return rejectWithValue(setErrorStatus(error));
      //
    } finally {
      dispatch(resetErrorAction());
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      await axios.post("/auth/logout");
      dispatch(projectLogOut());
    } catch (error) {
      return rejectWithValue(setErrorStatus(error));
    } finally {
      dispatch(resetErrorAction());
    }
  }
);

const fetchNewToken = createAsyncThunk(
  "auth/fetchNewToken",
  async ({ dataLastQuery = null, funcOperation }, thunkAPI) => {
    console.log(`thunkAPI`, thunkAPI);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;
    const sid = state.auth.sid;

    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
      token.unset();
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.post("/auth/refresh", { sid });
      token.set(data.newAccessToken);

      if (funcOperation) {
        console.log(`funcOperation`, funcOperation);
        return dataLastQuery
          ? thunkAPI.dispatch([funcOperation](dataLastQuery))
          : thunkAPI.dispatch([funcOperation]());
      } else {
        console.log(`fetchNewToken`, data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(setErrorStatus(error));
    } finally {
      thunkAPI.dispatch(resetErrorAction());
    }
  }
);

export const operations = {
  register,
  logOut,
  logIn,
  fetchNewToken,
};
export default operations;
