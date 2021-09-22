import { createSlice } from "@reduxjs/toolkit";
import projectOperations from "./projects-operations";

const initialState = {
  items: [],
  isLoading: false,
};

// const deletePost = (state, action) => {
//   // state.filter((item) => item._id !== action.payload)
//   return [state.filter((item) => item._id !== action.payload)];
// };

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectLogOut: () => initialState,
  },
  extraReducers: {
    [projectOperations.getProjects.fulfilled](state, { payload }) {
      if (payload.message === "No projects found") return [];
      state.items = [...payload];
    },
    [projectOperations.postProject.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [projectOperations.deleteProject.fulfilled](state, { payload }) {
      console.log(payload);
      state.items = [
        ...state.items.filter((item) => {
          const itemId = item._id ?? item.id;
          return itemId !== payload;
        }),
      ];
    },
    [projectOperations.addMember.fulfilled](state, { payload }) {
      console.log(state);
      const currentProject = state.items.filter((item) => {
        const itemId = item._id ?? item.id;
        return itemId === payload.id;
      });
      const idx = state.items.indexOf(currentProject[0]);
      state.items[idx].members = [...payload.data.newMembers];
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
