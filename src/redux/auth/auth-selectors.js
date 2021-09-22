const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserEmail = (state) => state.auth.user.email;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const getAccessToken = (state) => state.auth.token;

const getSid = (state) => state.auth.sid;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
  getAccessToken,
  getSid,
};
export default authSelectors;
