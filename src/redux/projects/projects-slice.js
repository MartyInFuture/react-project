import { createSlice } from '@reduxjs/toolkit';
import projectOperations from './projects-operations';

console.log(`projectOperations`, projectOperations);

const initialState = [];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    projectLogOut: () => [],
  },
  extraReducers: {
    [projectOperations.getProjects.fulfilled](state, action) {
      return [...action.payload];
    },
    [projectOperations.postProject.fulfilled](state, action) {
      state.push(action.payload);
    },
    // [authOperations.logOut.fulfilled](state) {
    //   state.projects = [];
    // },
    // [projectOperations.postMemberProjects.fulfilled](state, action) {
    //   state.members = [...state.members, ...action.payload];
    // },
    // [projectOperations.patchProject.fulfilled](state, action) {
    //   state = [...state, action.payload];
    // },
    // [projectOperations.deleteProject.fulfilled](state, action) {
    //   state = state.filter(({ _id }) => _id !== action.payload);
    // },
  },
});

export const { projectLogOut } = projectsSlice.actions;
export default projectsSlice.reducer;
