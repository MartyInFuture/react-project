// const getIsLoggedIn = (state) => state.auth.isLoggedIn;

// const getUsername = (state) => state.auth.user.name;

// const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

// const getAccessToken = (state) => state.auth.token;

const getSprints = (state) => state.sprints.items;

const sprintSelectors = {
  getSprints,
  //   getUsername,
  //   getIsFetchingCurrent,
  //   getAccessToken,
  //   getSid,
};
export default sprintSelectors;
