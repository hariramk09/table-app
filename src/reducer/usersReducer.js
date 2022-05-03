import { combineReducers } from "redux";

const userReducer = (state = [], action) => {
  if (action.type == "GET_USERS") return [...action.payload];
  return state;
};

export default userReducer;
