import { combineReducers } from "redux";

const userReducer = (state = [], action) => {
  if (action.type == "GET_USERS") return [...action.payload];

  if (action.type == "UPDATE_USER") {
    let userObjArr = state.map((element) => {
      if (element.id == action.payload.id) {
        let clonedUserObj = { ...action.payload };
        return clonedUserObj;
      }
      return element;
    });
    return [...userObjArr];
  }
  return state;
};

export default userReducer;
