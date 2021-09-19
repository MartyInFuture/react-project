import { createSlice } from "@reduxjs/toolkit"
import { addMember } from "./addMembers-operations"
import { addTask } from "./task-operations"

const initialState = {
  items: [],
  error: null,
  loading: false,
}

const membersSlice = createSlice({
  name: "members",
  initialState,
  extraReducers: {
    [addMember.fulfilled](state, { payload }) {
      state.error = null
      state.items.push(payload)
      state.loading = false
    },

    [addTask.pending](state) {
      state.loading = true
    },

    [addTask.rejected](state, { payload }) {
      state.error = payload
      state.loading = false
    },
  },
})

export default membersSlice
