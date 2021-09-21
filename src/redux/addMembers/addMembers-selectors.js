export const getProjects = (state) => state.projects

export const existingMembers = (state, filter) => {
  const projects = getProjects(state)
  console.log("filter", filter)
  console.log("state", state)

  return projects.filter((project) => project._id === filter).members
}
