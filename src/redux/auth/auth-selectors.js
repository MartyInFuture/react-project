const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const getAccessToken = (state) => state.auth.token;

const getSid = (state) => state.auth.sid;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getAccessToken,
  getSid,
};
export default authSelectors;
