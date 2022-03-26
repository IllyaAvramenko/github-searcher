import { usersAPI } from "../../api/usersAPI"
import { IUser } from "../../types/UserInterface"
import { BaseThunkType, InferActionsTypes } from "../store"
import { selectRepos } from "./Selectors"

const actions = {
   setCurrentUser: (user: IUser | null) => ({
      type: 'github/test/task/userInfo/SET_CURRENT_USER',
      payload: { user }
   } as const),

   setIsFetching: (flag: boolean) => ({
      type: 'github/test/task/userInfo/SET_FETCHING',
      payload: { flag }
   } as const),

   setError: (error: string) => ({
      type: 'github/test/task/userInfo/SET_ERROR',
      payload: { error }
   } as const),

   setRepos: (repos: any) => ({
      type: 'github/test/task/userInfo/SET_USER_REPOS',
      payload: { repos }
   } as const),

   setFiltredRepos: (repos: any) => ({
      type: 'github/test/task/userInfo/SET_FILTRED_REPOS',
      payload: { repos }
   } as const),

   setIsReposFetching: (flag: boolean) => ({
      type: 'github/test/task/userInfo/SET_IS_REPOS_FETCHING',
      payload: { flag }
   } as const),

   setReposError: (error: string) => ({
      type: 'github/test/task/userInfo/SET_REPOS_ERROR',
      payload: { error }
   } as const),
}

export const getUserByLogin = (login: string): ThunkType => async (dispatch, getState) => {
   dispatch(actions.setIsFetching(true))

   try {
      const user = await usersAPI.getUserByLogin(login)
      dispatch(actions.setCurrentUser(user))

      dispatch(getReposByUserLogin(login))
   } catch (e: any) {
      dispatch(actions.setError(e.message))
   } finally {
      dispatch(actions.setIsFetching(false))
   }
}

export const getReposByUserLogin = (login: string): ThunkType => async (dispatch, getState) => {
   dispatch(actions.setIsReposFetching(true))

   try {
      const repos = await usersAPI.getReposByUserLogin(login)
      dispatch(actions.setRepos(repos))
   } catch (e: any) {
      dispatch(actions.setError(e.message))
   } finally {
      dispatch(actions.setIsReposFetching(false))
   }
}

export const searchInRepos = (value: string): ThunkType => async (dispatch, getState) => {   
   const repos = selectRepos(getState())

   dispatch(actions.setReposError(''))

   if (value) {
      const filtredRepos = repos.filter(repo => {
         if (repo.name.includes(value)) return repo
         return false
      })
      if (filtredRepos.length === 0) {
         dispatch(actions.setReposError('There are no repositories found'))
      } else {
         dispatch(actions.setFiltredRepos(filtredRepos))
      }
      
   } else {
      dispatch(actions.setFiltredRepos([]))
   }


}

export type UserInfoActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<UserInfoActionsType>