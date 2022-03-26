import { AppStateType } from "../store";

export const selectUsers = (state: AppStateType) => state.usersPage.users
export const selectIsUsersFetching = (state: AppStateType) => state.usersPage.isUsersFetching
export const selectNotification = (state: AppStateType) => state.usersPage.notification