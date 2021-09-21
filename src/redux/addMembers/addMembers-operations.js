import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const addMember = createAsyncThunk("member/addMember", async ({ id, email }) => {
  try {
    const { data } = await axios.patch(`/project/contributor/${id}`, email)
    return data
  } catch (error) {
    console.log(error)
  }
})
