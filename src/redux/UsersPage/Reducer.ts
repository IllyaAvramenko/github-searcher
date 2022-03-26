import { IUserResponseDto } from "../../types/UserResponseDtoInterface"
import { UsersPageActionsType } from "./Actions"

const initialState = {
   users: [] as IUserResponseDto[],
   isUsersFetching: false as boolean,
   notification: '' as string
}

type InitialStateType = typeof initialState

export const usersPageReducer = (state = initialState, action: UsersPageActionsType): InitialStateType => {
   switch(action.type) {

      case 'github/test/task/userPage/SET_USERS':
         return { ...state, users: [ ...action.payload.users ] }

      case 'github/test/task/userPage/SET_IS_USERS_FETCHING':
         return { ...state, isUsersFetching: action.payload.flag }

      case 'github/test/task/userPage/SET_NOTIFICATION':
         return { ...state, notification: action.payload.message }

      default: 
         return state
   }
}