import { createSlice } from "@reduxjs/toolkit";
import projectOperations from "./projects-operations";

const initialState = {
  items: [],
  isLoading: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectLogOut: () => initialState,
  },
  extraReducers: {
    [projectOperations.getProjects.fulfilled](state, { payload }) {
      if (payload.message === "No projects found") return initialState;

      state.items = [...payload];
    },
    [projectOperations.postProject.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [projectOperations.deleteProject.fulfilled](state, { payload }) {
      state.items = [
        ...state.items.filter((item) => {
          const itemId = item._id ?? item.id;
          return itemId !== payload;
        }),
      ];
    },
    [projectOperations.addMember.fulfilled](state, { payload }) {
      const currentProject = state.items.filter((item) => {
        const itemId = item._id ?? item.id;
        return itemId === payload.id;
      });
      const idx = state.items.indexOf(currentProject[0]);
      state.items[idx].members = [...payload.data.newMembers];
    },
  },
});

export const { projectLogOut } = projectsSlice.actions;
export default projectsSlice.reducer;
