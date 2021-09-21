import { createSlice } from '@reduxjs/toolkit';
import projectOperations from './projects-operations';

console.log(`projectOperations`, projectOperations);

const initialState = [];

// const deletePost = (state, action) => {
//   // state.filter((item) => item._id !== action.payload)
//   return [state.filter((item) => item._id !== action.payload)];
// };

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    projectLogOut: () => [],
  },
  extraReducers: {
    [projectOperations.getProjects.fulfilled](_, { payload }) {
      if (payload.message === 'No projects found') return [];
      return [...payload];
    },
    [projectOperations.postProject.fulfilled](state, action) {
      state.push(action.payload);
    },
    [projectOperations.deleteProject.fulfilled](state, { payload }) {
      console.log('projectid must', payload);
      return [...state.filter((item) => item._id ?? item.id !== payload)];
    },
    [projectOperations.addMember.fulfilled](state, { payload }) {
      const currentProject = state.filter(
        (item) => item._id ?? item.id === payload.id
      );
      const idx = state.indexOf(currentProject[0]);
      state[idx].members = [...payload.data.newMembers];
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
