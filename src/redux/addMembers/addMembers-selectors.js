export const getProjects = (state) => state.projects

export const existingMembers = (state, filter) => {
  const projects = getProjects(state)

  //   return projects.filter((project) => project._id === filter).members
}
