import { AppStateType } from "../store";

export const selectCurrentUser = (state: AppStateType) => state.userInfo.currentUser
export const selectIsFetching = (state: AppStateType) => state.userInfo.isFetching
export const selectError = (state: AppStateType) => state.userInfo.error

export const selectRepos = (state: AppStateType) => state.userInfo.repos
export const selectFiltredRepos = (state: AppStateType) => state.userInfo.filtredRepos
export const selectIsReposFetching = (state: AppStateType) => state.userInfo.isReposFetching
export const selectReposError = (state: AppStateType) => state.userInfo.reposError
