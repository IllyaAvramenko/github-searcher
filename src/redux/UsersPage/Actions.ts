import { usersAPI } from "../../api/usersAPI"
import { IUserResponseDto } from "../../types/UserResponseDtoInterface"
import { BaseThunkType, InferActionsTypes } from "../store"

const actions = {
   setUsers: (users: IUserResponseDto[]) => ({
      type: 'github/test/task/userPage/SET_USERS',
      payload: { users }
   } as const),

   setIsUsersFetching: (flag: boolean) => ({
      type: 'github/test/task/userPage/SET_IS_USERS_FETCHING',
      payload: { flag }
   } as const),

   setNotification: (message: string) => ({
      type: 'github/test/task/userPage/SET_NOTIFICATION',
      payload: { message }
   } as const)
}

export const searchUsers = (searchStr: string): ThunkType => async (dispatch) => {
   dispatch(actions.setIsUsersFetching(true))
   dispatch(actions.setNotification(''))

   try {
      const users = await usersAPI.searchUsers(searchStr)
      dispatch(actions.setUsers(users.items))
      if (users.items.length === 0) {
         dispatch(actions.setNotification('There are no users found'))
      }

   } catch (e: any) {
      console.log('Something went wrong')
   } finally {
      dispatch(actions.setIsUsersFetching(false))
   }
}

export type UsersPageActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<UsersPageActionsType>