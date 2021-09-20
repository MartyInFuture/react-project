import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const addMember = createAsyncThunk("member/addMember", async (projectId, member) => {
  try {
    const { data } = await axios.patch(`/project​/contributor​/${projectId}`, member)
    return data
  } catch (error) {
    console.log(error)
  }
})
