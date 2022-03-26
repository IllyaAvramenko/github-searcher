import { combineReducers } from "redux";
import { userInfoReducer } from "./UserInfo/Reducer";
import { usersPageReducer } from "./UsersPage/Reducer";

export const rootReducer = combineReducers({
   usersPage: usersPageReducer,
   userInfo: userInfoReducer
})