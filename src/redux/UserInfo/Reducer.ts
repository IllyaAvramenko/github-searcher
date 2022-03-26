import { UserInfoActionsType } from "./Actions"
import { IUser } from "../../types/UserInterface"
import { IRepository } from "../../types/ReposResponseDtoInterface"


const initialState = {
   currentUser: null as null | IUser,
   isFetching: false as boolean,
   error: '' as string,

   repos: [] as IRepository[],
   filtredRepos: [] as IRepository[],
   isReposFetching: false as boolean,
   reposError: '' as string
}

type InitialStateType = typeof initialState

export const userInfoReducer = (state = initialState, action: UserInfoActionsType): InitialStateType => {
   switch(action.type) {

      case 'github/test/task/userInfo/SET_CURRENT_USER':
         return { ...state, currentUser: action.payload.user }

      case 'github/test/task/userInfo/SET_FETCHING':
         return { ...state, isFetching: action.payload.flag }

      case 'github/test/task/userInfo/SET_ERROR':
         return { ...state, error: action.payload.error }

      case 'github/test/task/userInfo/SET_USER_REPOS':
         return { ...state,  repos: [...action.payload.repos] }

      case 'github/test/task/userInfo/SET_IS_REPOS_FETCHING':
         return { ...state, isReposFetching: action.payload.flag }

      case 'github/test/task/userInfo/SET_REPOS_ERROR':
         return { ...state, reposError: action.payload.error }

      case 'github/test/task/userInfo/SET_FILTRED_REPOS':
         return { ...state,  filtredRepos: [...action.payload.repos] }

      default: 
         return state
   }
}