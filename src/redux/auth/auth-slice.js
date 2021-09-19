import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { id: null, email: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      //   state.user.id = action.payload.data.id;
      //   state.user.email = action.payload.data.email;
      //   //   state.user = action.payload.data;
      //   //   state.token = action.payload.accessToken;
      //   //   state.refreshToken = action.payload.refreshToken;
      //   //   state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user.id = action.payload.data.id;
      state.user.email = action.payload.data.email;
      state.token = action.payload.accessToken;
      state.sid = action.payload.sid;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { id: null, email: null };
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
