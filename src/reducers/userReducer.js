import userInitState from '../initState/userInitState.json';

export const userReducer = (state = userInitState, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      document.cookie = "token=" + action.payload.auth_token;
      return Object.assign({}, state, {
        currentUser: action.payload,
        fetched: true,
        error: false
      });

    case "LOGIN_FAILURE":
      return Object.assign({}, state, {
        loginFailed: true,
        error: action.payload
      });

    case "LOGOUT_SUCCESS":
      document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      return Object.assign({}, state, {currentUser: {}});

    case "SIGN_UP_SUCCESS":
      document.cookie = "token=" + action.payload.auth_token;
      return Object.assign({}, state, {
        currentUser: action.payload,
        fetched: true,
        signUpFailed: false,
        error: false
      });

    case "SIGN_UP_FAILURE":
      return Object.assign({}, state, {signUpFailed: true});

    case "FETCH_CURRENT_USER_SUCCESS":
      return Object.assign({}, state, {
        currentUser: action.payload,
        fetching: false,
        fetched: true
      });

    case "FETCH_CURRENT_USER_FAILURE":
      document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      return state;

    default:
      return state;
  }
}
