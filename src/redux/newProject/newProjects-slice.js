// import { createSlice } from "@reduxjs/toolkit";
// import projectOperations from "../projects/projects-operations";

// // import { getProjects, postProject } from "../newProject/newProjects-operations";

// // console.log(`getProjects`, getProjects);
// console.log(`projectOperations`, projectOperations);

// const initialState = [];

// const projectsSlice = createSlice({
//   name: "projects",
//   initialState,
//   reducers: {
//     projectLogOut: () => [],
//   },
//   extraReducers: {
//     [projectOperations.getProjects.fulfilled](state, action) {
//       state.push(...action.payload);
//     },
//     [projectOperations.postProject.fulfilled](state, action) {
//       state = [...state, action.payload];
//     },
//     // [projectsOperations.getProjects.fulfilled](state, action) {
//     //   state.push(...action.payload);
//     // },
//     // [projectsOperations.postProject.fulfilled](state, action) {
//     //   state = [...state, action.payload];
//     // },
//     // [authOperations.logOut.fulfilled](state) {
//     //   state.projects = [];
//     // },
//     // [projectOperations.postMemberProjects.fulfilled](state, action) {
//     //   state.members = [...state.members, ...action.payload];
//     // },
//     // [projectOperations.patchProject.fulfilled](state, action) {
//     //   state = [...state, action.payload];
//     // },
//     // [projectOperations.deleteProject.fulfilled](state, action) {
//     //   state = state.filter(({ _id }) => _id !== action.payload);
//     // },
//   },
// });

// export const { projectLogOut } = projectsSlice.actions;
// export default projectsSlice.reducer;
