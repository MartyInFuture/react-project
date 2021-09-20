import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const addTask = createAsyncThunk("task/addTask", async (sprintId, task) => {
  try {
    const { data } = await axios.post(`/task/${sprintId}`, task)
    return data
  } catch (error) {
    console.log(error)
  }
})
