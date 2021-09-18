import { createReducer } from "@reduxjs/toolkit";
import authOperations from "../auth/auth-operations";
import { resetErrorAction } from "./error-action";

const setError = (_, { payload }) => payload;
const resetError = (_, { payload }) => null;

export const error = createReducer(null, {
  [resetErrorAction]: resetError,
  [authOperations.register.rejected]: setError,
  [authOperations.logIn.rejected]: setError,
});
