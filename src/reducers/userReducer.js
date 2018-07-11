export const userReducer = (state={ currentUser: {} }, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, {currentUser: action.payload});
      break;
    default:
      return state;
  }
}
