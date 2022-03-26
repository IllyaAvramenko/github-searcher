import { IRepository } from "../types/ReposResponseDtoInterface"
import { IUser } from "../types/UserInterface"
import { IUserResponseDto } from "../types/UserResponseDtoInterface"
import { instance, APIResponseType } from "./api"

export const usersAPI = {
   searchUsers(queryParam: string) {
      const param = queryParam.replaceAll(' ', '%')

      return instance.get<APIResponseType<IUserResponseDto>>(`/search/users?q=${param}+in:user`).then(res => res.data)
   },

   getUserByLogin(login: string) {
      return instance.get<IUser>(`users/${login}`).then(res => res.data)
   },

   getReposByUserLogin(login: string) {
      return instance.get<Array<IRepository>>(`users/${login}/repos`).then(res => res.data)
   }
}